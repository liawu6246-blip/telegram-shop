// 简单的购物车功能
class SimpleCart {
    constructor() {
        this.items = [];
        this.loadCart();
        this.updateCartCount();
    }
    
    loadCart() {
        const saved = localStorage.getItem('simpleCart');
        if (saved) {
            this.items = JSON.parse(saved);
        }
    }
    
    saveCart() {
        localStorage.setItem('simpleCart', JSON.stringify(this.items));
    }
    
    addItem(product) {
        this.items.push(product);
        this.saveCart();
        this.updateCartCount();
        this.showNotification(`已添加 ${product.name} 到购物车`);
    }
    
    updateCartCount() {
        const countElements = document.querySelectorAll('.cart-count');
        countElements.forEach(el => {
            el.textContent = this.items.length;
            el.style.display = this.items.length > 0 ? 'inline-block' : 'none';
        });
    }
    
    showNotification(message) {
        // 创建通知
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // 3秒后移除
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

// 初始化购物车
const cart = new SimpleCart();

// 添加到购物车函数
function addToCart(productName, price) {
    const product = {
        id: Date.now(),
        name: productName,
        price: price,
        addedAt: new Date().toISOString()
    };
    
    cart.addItem(product);
}

// 邀请系统
function initInviteSystem() {
    // 生成用户ID
    let userId = localStorage.getItem('tg_user_id');
    if (!userId) {
        userId = 'user_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('tg_user_id', userId);
    }
    
    // 检查邀请链接
    const urlParams = new URLSearchParams(window.location.search);
    const referrerId = urlParams.get('ref');
    
    if (referrerId && referrerId !== userId) {
        // 记录邀请关系
        let invites = JSON.parse(localStorage.getItem('tg_invites') || '{}');
        if (!invites[referrerId]) {
            invites[referrerId] = [];
        }
        if (!invites[referrerId].includes(userId)) {
            invites[referrerId].push(userId);
            localStorage.setItem('tg_invites', JSON.stringify(invites));
        }
        
        // 显示折扣提示
        showDiscountBanner();
    }
    
    // 生成邀请链接
    const inviteLink = `${window.location.origin}${window.location.pathname}?ref=${userId}`;
    
    // 更新邀请链接显示
    const inviteElements = document.querySelectorAll('.invite-link');
    inviteElements.forEach(el => {
        el.textContent = inviteLink;
        el.value = inviteLink;
    });
}

// 显示折扣横幅
function showDiscountBanner() {
    const banner = document.createElement('div');
    banner.innerHTML = `
        <div style="background: linear-gradient(135deg, #8A2BE2, #9370DB); color: white; padding: 15px; text-align: center;">
            🎉 您是受邀用户！享受所有商品<strong>50%折扣</strong>！
        </div>
    `;
    document.body.insertBefore(banner, document.body.firstChild);
}

// 复制邀请链接
function copyInviteLink() {
    const link = document.querySelector('.invite-link')?.value || 
                 document.querySelector('.invite-link')?.textContent;
    
    if (link) {
        navigator.clipboard.writeText(link).then(() => {
            alert('✅ 邀请链接已复制！\n\n' + link);
        });
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initInviteSystem();
    
    // 绑定添加到购物车按钮
    document.querySelectorAll('.btn-add-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-title').textContent;
            const priceText = productCard.querySelector('.product-price').textContent;
            const price = parseFloat(priceText.replace('¥', ''));
            
            addToCart(productName, price);
        });
    });
    
    // 绑定复制邀请链接按钮
    document.querySelectorAll('.copy-invite-btn').forEach(button => {
        button.addEventListener('click', copyInviteLink);
    });
});
