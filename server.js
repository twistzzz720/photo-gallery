/* ============================================
   光影瞬间 - 后端服务器
   Express + Multer + JSON 文件存储
   ============================================ */

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// 中间件
// ==========================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS - 允许所有来源访问
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

// 静态文件服务 - 前端页面和上传的图片
app.use(express.static(__dirname));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ==========================================
// 数据存储配置
// ==========================================
const DATA_DIR = path.join(__dirname, 'data');
const UPLOAD_DIR = path.join(__dirname, 'uploads');
const DATA_FILE = path.join(DATA_DIR, 'photos.json');

// 确保目录存在
[DATA_DIR, UPLOAD_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// ==========================================
// 文件上传配置 (Multer)
// ==========================================
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const name = Date.now() + '-' + crypto.randomBytes(6).toString('hex') + ext;
        cb(null, name);
    }
});

const fileFilter = (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (allowed.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('仅支持 JPG、PNG、WebP 格式'), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

// ==========================================
// 数据读写
// ==========================================
function readPhotos() {
    try {
        if (!fs.existsSync(DATA_FILE)) return [];
        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function writePhotos(photos) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(photos, null, 2), 'utf-8');
}

// ==========================================
// 初始化种子数据（仅在首次运行时）
// ==========================================
function seedIfEmpty() {
    const photos = readPhotos();
    if (photos.length > 0) return; // 已有数据，跳过

    const samples = [
        // 汽车摄影 (6)
        { id: 'car-1', title: '赛道上的法拉利', category: 'car', desc: 'F1赛道上的红色闪电，捕捉速度与激情的瞬间。', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', date: '2025-03-15', userUpload: false },
        { id: 'car-2', title: '经典保时捷911', category: 'car', desc: '复古风格与现代工艺的完美结合。', url: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80', date: '2025-02-20', userUpload: false },
        { id: 'car-3', title: '城市夜行', category: 'car', desc: '霓虹灯下的跑车，都市夜色中的一道光。', url: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80', date: '2025-04-01', userUpload: false },
        { id: 'car-4', title: '越野传奇', category: 'car', desc: '荒野中的越野车，无惧任何地形挑战。', url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', date: '2025-01-10', userUpload: false },
        { id: 'car-5', title: '老式肌肉车', category: 'car', desc: '美式经典肌肉车，散发着年代的魅力。', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', date: '2025-05-05', userUpload: false },
        { id: 'car-6', title: '超级跑车细节', category: 'car', desc: '近距离感受超跑的工艺美学。', url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', date: '2025-04-18', userUpload: false },
        // 人物摄影 (6)
        { id: 'portrait-1', title: '秋日人像', category: 'portrait', desc: '金色阳光下的自然光人像，温暖而柔和。', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', date: '2025-03-20', userUpload: false },
        { id: 'portrait-2', title: '街头光影', category: 'portrait', desc: '城市街头捕捉的自然表情瞬间。', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80', date: '2025-02-14', userUpload: false },
        { id: 'portrait-3', title: '舞者之姿', category: 'portrait', desc: '舞蹈演员的优雅姿态，力与美的结合。', url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80', date: '2025-04-10', userUpload: false },
        { id: 'portrait-4', title: '窗前剪影', category: 'portrait', desc: '利用自然窗光创作的剪影人像作品。', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', date: '2025-01-25', userUpload: false },
        { id: 'portrait-5', title: '微笑的力量', category: 'portrait', desc: '一个真诚的微笑胜过千言万语。', url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80', date: '2025-05-01', userUpload: false },
        { id: 'portrait-6', title: '老者肖像', category: 'portrait', desc: '岁月在脸上刻下的痕迹，每一道都是故事。', url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80', date: '2025-04-22', userUpload: false },
        // 风景摄影 (6)
        { id: 'landscape-1', title: '雪山日出', category: 'landscape', desc: '清晨第一缕阳光洒在雪峰之巅。', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', date: '2025-03-08', userUpload: false },
        { id: 'landscape-2', title: '海边日落', category: 'landscape', desc: '金色余晖洒满海面，天地一色。', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', date: '2025-02-28', userUpload: false },
        { id: 'landscape-3', title: '森林秘境', category: 'landscape', desc: '晨雾缭绕的原始森林，如仙境一般。', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', date: '2025-04-15', userUpload: false },
        { id: 'landscape-4', title: '极光之夜', category: 'landscape', desc: '北极圈内绚丽的极光在空中舞动。', url: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80', date: '2025-01-30', userUpload: false },
        { id: 'landscape-5', title: '桂林山水', category: 'landscape', desc: '漓江两岸的喀斯特地貌，如诗如画。', url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80', date: '2025-05-10', userUpload: false },
        { id: 'landscape-6', title: '大漠孤烟', category: 'landscape', desc: '沙漠中的孤独之美，广袤而宁静。', url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80', date: '2025-04-28', userUpload: false },
        // 体育摄影 (6)
        { id: 'sports-1', title: '足球射门瞬间', category: 'sports', desc: '球门前决定性的一击，屏息凝神。', url: 'https://images.unsplash.com/photo-1461896836934-bd45ba3cf810?w=800&q=80', date: '2025-03-25', userUpload: false },
        { id: 'sports-2', title: '篮球扣篮', category: 'sports', desc: '空中飞人的完美扣篮瞬间。', url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80', date: '2025-02-10', userUpload: false },
        { id: 'sports-3', title: '冲浪达人', category: 'sports', desc: '巨浪之中自如穿梭的冲浪高手。', url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80', date: '2025-04-05', userUpload: false },
        { id: 'sports-4', title: '马拉松冲刺', category: 'sports', desc: '终点线前的全力冲刺，超越极限。', url: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80', date: '2025-01-20', userUpload: false },
        { id: 'sports-5', title: '滑雪飞越', category: 'sports', desc: '雪山之巅的极限滑雪，勇气与技巧。', url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80', date: '2025-05-15', userUpload: false },
        { id: 'sports-6', title: '网球发球', category: 'sports', desc: '职业选手的暴力发球，力量感十足。', url: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80', date: '2025-04-30', userUpload: false },
    ];

    writePhotos(samples);
    console.log(`✅ 已初始化 ${samples.length} 张样本照片`);
}

// ==========================================
// API 路由
// ==========================================

// GET /api/photos - 获取所有照片（可筛选分类）
app.get('/api/photos', (req, res) => {
    try {
        let photos = readPhotos();
        const { category } = req.query;

        if (category && ['car', 'portrait', 'landscape', 'sports'].includes(category)) {
            photos = photos.filter(p => p.category === category);
        }

        res.json({ success: true, count: photos.length, data: photos });
    } catch (err) {
        res.status(500).json({ success: false, message: '读取数据失败' });
    }
});

// GET /api/photos/:category - 按分类获取照片
app.get('/api/photos/:category', (req, res) => {
    try {
        const { category } = req.params;
        if (!['car', 'portrait', 'landscape', 'sports'].includes(category)) {
            return res.status(400).json({ success: false, message: '无效的分类' });
        }

        const photos = readPhotos().filter(p => p.category === category);
        res.json({ success: true, count: photos.length, data: photos });
    } catch (err) {
        res.status(500).json({ success: false, message: '读取数据失败' });
    }
});

// POST /api/upload - 上传照片
app.post('/api/upload', upload.single('photo'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: '请选择图片文件' });
        }

        const { title, category, desc } = req.body;

        if (!title || !category) {
            // 删除已上传的文件
            fs.unlinkSync(req.file.path);
            return res.status(400).json({ success: false, message: '作品名称和分类为必填项' });
        }

        if (!['car', 'portrait', 'landscape', 'sports'].includes(category)) {
            fs.unlinkSync(req.file.path);
            return res.status(400).json({ success: false, message: '无效的摄影分类' });
        }

        const newPhoto = {
            id: 'user-' + Date.now() + '-' + crypto.randomBytes(4).toString('hex'),
            title: title.trim(),
            category,
            desc: (desc || '').trim(),
            url: '/uploads/' + req.file.filename,
            date: new Date().toISOString().split('T')[0],
            userUpload: true
        };

        const photos = readPhotos();
        photos.unshift(newPhoto);
        writePhotos(photos);

        console.log(`📤 新上传: ${newPhoto.title} (${newPhoto.category})`);

        res.status(201).json({ success: true, message: '上传成功', data: newPhoto });
    } catch (err) {
        console.error('上传错误:', err);
        res.status(500).json({ success: false, message: '上传失败，请重试' });
    }
});

// DELETE /api/photos/:id - 删除照片（仅限用户上传的）
app.delete('/api/photos/:id', (req, res) => {
    try {
        const { id } = req.params;
        const photos = readPhotos();
        const index = photos.findIndex(p => p.id === id);

        if (index === -1) {
            return res.status(404).json({ success: false, message: '作品不存在' });
        }

        const photo = photos[index];

        if (!photo.userUpload) {
            return res.status(403).json({ success: false, message: '不能删除系统预置作品' });
        }

        // 删除服务器上的图片文件
        if (photo.url && photo.url.startsWith('/uploads/')) {
            const filePath = path.join(__dirname, photo.url);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }

        photos.splice(index, 1);
        writePhotos(photos);

        console.log(`🗑️ 已删除: ${photo.title}`);

        res.json({ success: true, message: '删除成功' });
    } catch (err) {
        console.error('删除错误:', err);
        res.status(500).json({ success: false, message: '删除失败' });
    }
});

// GET /api/stats - 获取各分类作品数量
app.get('/api/stats', (req, res) => {
    try {
        const photos = readPhotos();
        const stats = {
            car: photos.filter(p => p.category === 'car').length,
            portrait: photos.filter(p => p.category === 'portrait').length,
            landscape: photos.filter(p => p.category === 'landscape').length,
            sports: photos.filter(p => p.category === 'sports').length,
            total: photos.length
        };
        res.json({ success: true, data: stats });
    } catch (err) {
        res.status(500).json({ success: false, message: '获取统计数据失败' });
    }
});

// 404 处理
app.use((req, res) => {
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ success: false, message: 'API 端点不存在' });
    }
    // 对于非 API 请求，返回首页（SPA 支持）
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 错误处理
app.use((err, req, res, next) => {
    console.error('服务器错误:', err);
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ success: false, message: '文件大小不能超过 10MB' });
        }
        return res.status(400).json({ success: false, message: '文件上传错误: ' + err.message });
    }
    res.status(500).json({ success: false, message: '服务器内部错误' });
});

// ==========================================
// 启动服务器
// ==========================================
seedIfEmpty();

app.listen(PORT, '0.0.0.0', () => {
    console.log('');
    console.log('═══════════════════════════════════════════');
    console.log('  📷  光影瞬间 - 摄影作品展示平台');
    console.log('═══════════════════════════════════════════');
    console.log(`  🌐  本地访问: http://localhost:${PORT}`);
    console.log(`  📡  局域网:   http://<你的IP>:${PORT}`);
    console.log(`  📁  上传目录: ${UPLOAD_DIR}`);
    console.log(`  💾  数据文件: ${DATA_FILE}`);
    console.log('═══════════════════════════════════════════');
    console.log('');
    console.log('  按 Ctrl+C 停止服务器');
    console.log('');
});
