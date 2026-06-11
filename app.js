/* ============================================
   光影瞬间 - 摄影作品展示平台 主脚本
   ============================================ */

// --- 样本数据 ---
const samplePhotos = {
    car: [
        {
            id: 'car-1',
            title: '赛道上的法拉利',
            category: 'car',
            desc: 'F1赛道上的红色闪电，捕捉速度与激情的瞬间。',
            url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
            date: '2025-03-15'
        },
        {
            id: 'car-2',
            title: '经典保时捷911',
            category: 'car',
            desc: '复古风格与现代工艺的完美结合。',
            url: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80',
            date: '2025-02-20'
        },
        {
            id: 'car-3',
            title: '城市夜行',
            category: 'car',
            desc: '霓虹灯下的跑车，都市夜色中的一道光。',
            url: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80',
            date: '2025-04-01'
        },
        {
            id: 'car-4',
            title: '越野传奇',
            category: 'car',
            desc: '荒野中的越野车，无惧任何地形挑战。',
            url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
            date: '2025-01-10'
        },
        {
            id: 'car-5',
            title: '老式肌肉车',
            category: 'car',
            desc: '美式经典肌肉车，散发着年代的魅力。',
            url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            date: '2025-05-05'
        },
        {
            id: 'car-6',
            title: '超级跑车细节',
            category: 'car',
            desc: '近距离感受超跑的工艺美学。',
            url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
            date: '2025-04-18'
        }
    ],
    portrait: [
        {
            id: 'portrait-1',
            title: '秋日人像',
            category: 'portrait',
            desc: '金色阳光下的自然光人像，温暖而柔和。',
            url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
            date: '2025-03-20'
        },
        {
            id: 'portrait-2',
            title: '街头光影',
            category: 'portrait',
            desc: '城市街头捕捉的自然表情瞬间。',
            url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
            date: '2025-02-14'
        },
        {
            id: 'portrait-3',
            title: '舞者之姿',
            category: 'portrait',
            desc: '舞蹈演员的优雅姿态，力与美的结合。',
            url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
            date: '2025-04-10'
        },
        {
            id: 'portrait-4',
            title: '窗前剪影',
            category: 'portrait',
            desc: '利用自然窗光创作的剪影人像作品。',
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
            date: '2025-01-25'
        },
        {
            id: 'portrait-5',
            title: '微笑的力量',
            category: 'portrait',
            desc: '一个真诚的微笑胜过千言万语。',
            url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
            date: '2025-05-01'
        },
        {
            id: 'portrait-6',
            title: '老者肖像',
            category: 'portrait',
            desc: '岁月在脸上刻下的痕迹，每一道都是故事。',
            url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
            date: '2025-04-22'
        }
    ],
    landscape: [
        {
            id: 'landscape-1',
            title: '雪山日出',
            category: 'landscape',
            desc: '清晨第一缕阳光洒在雪峰之巅。',
            url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            date: '2025-03-08'
        },
        {
            id: 'landscape-2',
            title: '海边日落',
            category: 'landscape',
            desc: '金色余晖洒满海面，天地一色。',
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
            date: '2025-02-28'
        },
        {
            id: 'landscape-3',
            title: '森林秘境',
            category: 'landscape',
            desc: '晨雾缭绕的原始森林，如仙境一般。',
            url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
            date: '2025-04-15'
        },
        {
            id: 'landscape-4',
            title: '极光之夜',
            category: 'landscape',
            desc: '北极圈内绚丽的极光在空中舞动。',
            url: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80',
            date: '2025-01-30'
        },
        {
            id: 'landscape-5',
            title: '桂林山水',
            category: 'landscape',
            desc: '漓江两岸的喀斯特地貌，如诗如画。',
            url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
            date: '2025-05-10'
        },
        {
            id: 'landscape-6',
            title: '大漠孤烟',
            category: 'landscape',
            desc: '沙漠中的孤独之美，广袤而宁静。',
            url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
            date: '2025-04-28'
        }
    ],
    sports: [
        {
            id: 'sports-1',
            title: '足球射门瞬间',
            category: 'sports',
            desc: '球门前决定性的一击，屏息凝神。',
            url: 'https://images.unsplash.com/photo-1461896836934-bd45ba3cf810?w=800&q=80',
            date: '2025-03-25'
        },
        {
            id: 'sports-2',
            title: '篮球扣篮',
            category: 'sports',
            desc: '空中飞人的完美扣篮瞬间。',
            url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
            date: '2025-02-10'
        },
        {
            id: 'sports-3',
            title: '冲浪达人',
            category: 'sports',
            desc: '巨浪之中自如穿梭的冲浪高手。',
            url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
            date: '2025-04-05'
        },
        {
            id: 'sports-4',
            title: '马拉松冲刺',
            category: 'sports',
            desc: '终点线前的全力冲刺，超越极限。',
            url: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
            date: '2025-01-20'
        },
        {
            id: 'sports-5',
            title: '滑雪飞越',
            category: 'sports',
            desc: '雪山之巅的极限滑雪，勇气与技巧。',
            url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
            date: '2025-05-15'
        },
        {
            id: 'sports-6',
            title: '网球发球',
            category: 'sports',
            desc: '职业选手的暴力发球，力量感十足。',
            url: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80',
            date: '2025-04-30'
        }
    ]
};

// --- 状态管理 ---
let currentCategory = null;
let currentPreviewPhoto = null;

const STORAGE_KEY = 'photogallery_uploads';

function getUserPhotos() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
        return [];
    }
}

function saveUserPhotos(photos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
}

function getAllPhotos(category) {
    const samples = samplePhotos[category] || [];
    const userPhotos = getUserPhotos().filter(p => p.category === category);
    return [...samples, ...userPhotos];
}

function getPhotoCount(category) {
    return getAllPhotos(category).length;
}

// --- 导航 ---
function goHome() {
    currentCategory = null;
    document.getElementById('homePage').classList.add('active');
    document.getElementById('categoryPage').classList.remove('active');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    updateCategoryCounts();
    renderFeatured();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateTo(category) {
    currentCategory = category;
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('categoryPage').classList.add('active');

    // 设置分类页面的头部
    const config = getCategoryConfig(category);
    const header = document.getElementById('categoryHeader');
    header.className = 'category-header ' + category + '-bg';
    document.getElementById('categoryTitle').textContent = config.icon + ' ' + config.name;
    document.getElementById('categoryDesc').textContent = config.desc;

    // 高亮导航
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('onclick')?.includes(`'${category}'`)) {
            a.classList.add('active');
        }
    });

    // 清空搜索
    document.getElementById('searchInput').value = '';
    document.getElementById('sortSelect').value = 'newest';

    renderGallery();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getCategoryConfig(category) {
    const configs = {
        car: { name: '汽车摄影', icon: '🚗', desc: '速度与美学的完美融合 — 从经典到现代，每一辆车都有自己的灵魂' },
        portrait: { name: '人物摄影', icon: '👤', desc: '捕捉人物的灵魂与情感 — 每一个表情都在讲述一个故事' },
        landscape: { name: '风景摄影', icon: '🏔️', desc: '大自然的壮丽与宁静 — 用镜头记录地球的壮美诗篇' },
        sports: { name: '体育摄影', icon: '⚽', desc: '激情与力量的精彩瞬间 — 定格运动中不可复制的决定性时刻' }
    };
    return configs[category];
}

function scrollToCategories() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

// --- 渲染 ---
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    const empty = document.getElementById('emptyState');
    const searchTerm = document.getElementById('searchInput')?.value?.toLowerCase() || '';
    const sortBy = document.getElementById('sortSelect')?.value || 'newest';

    let photos = getAllPhotos(currentCategory);

    // 搜索过滤
    if (searchTerm) {
        photos = photos.filter(p =>
            p.title.toLowerCase().includes(searchTerm) ||
            p.desc.toLowerCase().includes(searchTerm)
        );
    }

    // 排序
    photos = [...photos].sort((a, b) => {
        switch (sortBy) {
            case 'oldest': return new Date(a.date) - new Date(b.date);
            case 'name': return a.title.localeCompare(b.title);
            default: return new Date(b.date) - new Date(a.date);
        }
    });

    if (photos.length === 0) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';
    grid.innerHTML = photos.map((photo, index) => `
        <div class="gallery-item" style="animation-delay: ${index * 0.05}s;" onclick='openPreview(${JSON.stringify(photo).replace(/'/g, "&#39;")})'>
            <img src="${photo.url}" alt="${photo.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${photo.title}</h3>
                <div class="gallery-meta">${photo.date} · ${photo.userUpload ? '用户上传' : '精选'}</div>
            </div>
        </div>
    `).join('');
}

function filterGallery() {
    renderGallery();
}

function renderFeatured() {
    const grid = document.getElementById('featuredGrid');
    const allPhotos = [
        ...samplePhotos.car.slice(0, 2),
        ...samplePhotos.portrait.slice(0, 2),
        ...samplePhotos.landscape.slice(0, 2),
        ...samplePhotos.sports.slice(0, 2),
        ...getUserPhotos().slice(-4)
    ];

    // 随机选 8 张
    const shuffled = allPhotos.sort(() => Math.random() - 0.5).slice(0, 8);

    grid.innerHTML = shuffled.map(photo => {
        const catClass = 'cat-' + photo.category;
        const catName = getCategoryConfig(photo.category).name;
        return `
            <div class="featured-item" onclick='openPreview(${JSON.stringify(photo).replace(/'/g, "&#39;")})'>
                <img src="${photo.url}" alt="${photo.title}" loading="lazy">
                <div class="featured-overlay">
                    <span class="featured-cat ${catClass}">${catName}</span>
                    <h3>${photo.title}</h3>
                </div>
            </div>
        `;
    }).join('');
}

function updateCategoryCounts() {
    ['car', 'portrait', 'landscape', 'sports'].forEach(cat => {
        const el = document.getElementById(cat + 'Count');
        if (el) {
            el.textContent = getPhotoCount(cat) + ' 张作品';
        }
    });
}

// --- 预览 ---
function openPreview(photo) {
    currentPreviewPhoto = photo;
    document.getElementById('previewImage').src = photo.url;
    document.getElementById('previewTitle').textContent = photo.title;
    document.getElementById('previewCategory').textContent = '分类：' + getCategoryConfig(photo.category).name;
    document.getElementById('previewDate').textContent = '日期：' + photo.date;
    document.getElementById('previewDesc').textContent = photo.desc || '';

    // 只有用户上传的才能删除
    const deleteBtn = document.getElementById('previewDelete');
    if (photo.userUpload) {
        deleteBtn.style.display = 'block';
    } else {
        deleteBtn.style.display = 'none';
    }

    document.getElementById('previewModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closePreview() {
    document.getElementById('previewModal').classList.remove('show');
    document.body.style.overflow = '';
    currentPreviewPhoto = null;
}

function deletePhoto() {
    if (!currentPreviewPhoto || !currentPreviewPhoto.userUpload) return;

    if (confirm('确定要删除作品「' + currentPreviewPhoto.title + '」吗？此操作不可撤销。')) {
        const photos = getUserPhotos();
        const filtered = photos.filter(p => p.id !== currentPreviewPhoto.id);
        saveUserPhotos(filtered);
        closePreview();
        showToast('作品已删除', 'success');

        if (currentCategory) {
            renderGallery();
        }
        updateCategoryCounts();
        renderFeatured();
    }
}

// --- 上传 ---
function openUploadModal() {
    document.getElementById('uploadModal').classList.add('show');
    document.body.style.overflow = 'hidden';

    // 如果当前在分类页面，预选分类
    if (currentCategory) {
        document.getElementById('photoCategory').value = currentCategory;
    }

    resetUploadForm();
}

function closeUploadModal() {
    document.getElementById('uploadModal').classList.remove('show');
    document.body.style.overflow = '';
    resetUploadForm();
}

function resetUploadForm() {
    document.getElementById('uploadForm').reset();
    document.getElementById('filePreview').style.display = 'none';
    document.getElementById('fileUploadArea').querySelector('.file-upload-icon').style.display = '';
    document.getElementById('fileUploadArea').querySelector('p').style.display = '';
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    // 验证文件类型
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
        showToast('请选择 JPG、PNG 或 WebP 格式的图片', 'error');
        event.target.value = '';
        return;
    }

    // 验证文件大小 (10MB)
    if (file.size > 10 * 1024 * 1024) {
        showToast('图片大小不能超过 10MB', 'error');
        event.target.value = '';
        return;
    }

    // 预览
    const reader = new FileReader();
    reader.onload = function(e) {
        const preview = document.getElementById('filePreview');
        preview.src = e.target.result;
        preview.style.display = 'block';
        document.getElementById('fileUploadArea').querySelector('.file-upload-icon').style.display = 'none';
        document.getElementById('fileUploadArea').querySelector('p').style.display = 'none';
    };
    reader.readAsDataURL(file);
}

function handleUpload(event) {
    event.preventDefault();

    const title = document.getElementById('photoTitle').value.trim();
    const category = document.getElementById('photoCategory').value;
    const desc = document.getElementById('photoDesc').value.trim();
    const fileInput = document.getElementById('photoFile');
    const file = fileInput.files[0];

    if (!file) {
        showToast('请选择一张图片', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const newPhoto = {
            id: 'user-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8),
            title: title,
            category: category,
            desc: desc || '用户上传作品',
            url: e.target.result,
            date: new Date().toISOString().split('T')[0],
            userUpload: true
        };

        const photos = getUserPhotos();
        photos.unshift(newPhoto);
        saveUserPhotos(photos);

        closeUploadModal();
        showToast('作品上传成功！🎉', 'success');
        updateCategoryCounts();
        renderFeatured();

        // 如果当前在对应分类页面，刷新画廊
        if (currentCategory === category) {
            renderGallery();
        } else if (!currentCategory) {
            // 在首页，询问是否跳转
            showToast('上传成功！点击导航栏查看你的作品', 'info');
        }
    };
    reader.readAsDataURL(file);
}

// --- Toast 通知 ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    toast.innerHTML = `<span>${icons[type] || ''}</span> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- 移动端菜单 ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
}

// --- 键盘事件 ---
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (document.getElementById('previewModal').classList.contains('show')) {
            closePreview();
        } else if (document.getElementById('uploadModal').classList.contains('show')) {
            closeUploadModal();
        }
    }
});

// --- 点击模态框外部关闭 ---
document.getElementById('previewModal').addEventListener('click', function(e) {
    if (e.target === this) closePreview();
});

document.getElementById('uploadModal').addEventListener('click', function(e) {
    if (e.target === this) closeUploadModal();
});

// --- 导航栏滚动效果 ---
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- 拖拽上传 ---
const fileUploadArea = document.getElementById('fileUploadArea');
if (fileUploadArea) {
    fileUploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.borderColor = '#667eea';
        this.style.background = 'rgba(102,126,234,0.1)';
    });

    fileUploadArea.addEventListener('dragleave', function() {
        this.style.borderColor = '';
        this.style.background = '';
    });

    fileUploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.borderColor = '';
        this.style.background = '';
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const input = document.getElementById('photoFile');
            input.files = files;
            handleFileSelect({ target: { files } });
        }
    });
}

// --- 初始化 ---
function init() {
    updateCategoryCounts();
    renderFeatured();
}

// 页面加载完毕后初始化
document.addEventListener('DOMContentLoaded', init);
