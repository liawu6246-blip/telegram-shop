# telegram-shop<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telegram Shop - 邀请好友享半价</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
</head>
<body>
    <!-- 顶部导航 -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <h1 class="logo">
                    <i class="fas fa-store"></i>
                    Telegram Shop
                </h1>
                <nav class="nav">
                    <a href="index.html" class="nav-link active">
                        <i class="fas fa-home"></i> 首页
                    </a>
                    <a href="cart.html" class="nav-link">
                        <i class="fas fa-shopping-cart"></i>
                        购物车 <span class="cart-count">0</span>
                    </a>
                    <a href="profile.html" class="nav-link">
                        <i class="fas fa-user"></i> 个人中心
                    </a>
                </nav>
            </div>
        </div>
    </header>

    <!-- 欢迎横幅 -->
    <section class="welcome-banner">
        <div class="container">
            <div class="banner-content">
                <div class="banner-text">
                    <h2>🎉 邀请好友，双双享优惠！</h2>
                    <p>好友通过你的链接下单可享<strong>50%折扣</strong>，邀请3人成功下单即可<strong>免单一笔订单</strong>！</p>
                    <a href="profile.html" class="btn">
                        <i class="fas fa-share-alt"></i> 立即邀请
                    </a>
                </div>
                <div style="font-size: 6rem; opacity: 0.8;">
                    🎁
                </div>
            </div>
        </div>
    </section>

    <!-- 商品列表 -->
    <main class="main-content">
        <div class="container">
            <h2 style="margin: 30px 0 20px;">热门商品</h2>

            <div class="products-grid">
                <!-- 商品1 -->
                <div class="product-card">
                    <img src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop" 
                         alt="AirPods Pro" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">AirPods Pro (第二代)</h3>
                        <p>主动降噪无线耳机，带来沉浸式音质体验</p>
                        <div class="product-price">¥1899</div>
                        <button class="btn-add-cart">
                            <i class="fas fa-cart-plus"></i>
                            加入购物车
                        </button>
                    </div>
                </div>

                <!-- 商品2 -->
                <div class="product-card">
                    <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop" 
                         alt="Apple Watch" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">Apple Watch Series 9</h3>
                        <p>智能手表，健康监测，运动追踪</p>
                        <div class="product-price">¥2999</div>
                        <button class="btn-add-cart">
                            <i class="fas fa-cart-plus"></i>
                            加入购物车
                        </button>
                    </div>
                </div>

                <!-- 商品3 -->
                <div class="product-card">
                    <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop" 
                         alt="T恤" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">简约纯棉T恤</h3>
                        <p>100%纯棉，舒适透气，多色可选</p>
                        <div class="product-price">¥99</div>
                        <button class="btn-add-cart">
                            <i class="fas fa-cart-plus"></i>
                            加入购物车
                        </button>
                    </div>
                </div>

                <!-- 商品4 -->
                <div class="product-card">
                    <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop" 
                         alt="MacBook" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">MacBook Air M2</h3>
                        <p>轻薄笔记本电脑，M2芯片，超长续航</p>
                        <div class="product-price">¥8999</div>
                        <button class="btn-add-cart">
                            <i class="fas fa-cart-plus"></i>
                            加入购物车
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- 邀请提示 -->
    <div class="container" style="margin: 40px auto; text-align: center;">
        <div style="background: #f0f8ff; padding: 30px; border-radius: 12px;">
            <h3>📢 开始邀请好友赚取奖励！</h3>
            <p style="margin: 15px 0;">您的专属邀请链接：</p>
            <div style="display: flex; gap: 10px; margin: 20px 0; justify-content: center;">
                <input type="text" class="invite-link" readonly 
                       style="flex: 1; max-width: 400px; padding: 12px; border: 2px solid #ddd; border-radius: 8px;">
                <button class="btn copy-invite-btn">
                    <i class="far fa-copy"></i> 复制链接
                </button>
            </div>
            <p>每成功邀请1位好友下单，您的邀请进度+1，满3人即可申请退款！</p>
        </div>
    </div>

    <!-- 页脚 -->
    <footer class="footer">
        <div class="container">
            <p>© 2024 Telegram Shop. 邀请好友享优惠系统</p>
            <p>演示版本 - 完整功能需部署到Telegram</p>
        </div>
    </footer>

    <script src="js/app.js"></script>
    
    <script>
        // 添加一些动画样式
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    </script>
</body>
</html>
