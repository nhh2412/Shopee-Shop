'use strict'
const web = {
    currentCategoryIndex: 0,
    currentImgCarouselTransition: -1200,
    currentImgCarouselDot: 0,
    isCarousel: false,
    interval: null,
    currentProductSort: 'popular',
    currentPagProduct: 1,

    user: {
        userFollowing: false,

        notifies: [
            {
                title: 'Chỉ 2 phút giúp Shopee hiểu shop hơn!',
                content: 'Quảng cáo của Shopee để lại cho bạn ấn tượng gì?Hãy nói cho Shopee nghe tại đây nhé!',
                status: 'unread',
                image: './assets/img/shop/shopee.png',
            },
            {
                title: 'Giao kiện hàng thành công',
                content: 'Kiện hàng <h4>SPXVN029582878637</h4>của đơn hàng <h4>220707R1FS3AXF</h4> đã giao đến bạn',
                status: 'read',
                image: './assets/img/shop/lhdctl.jpg',
            },
            {
                title: 'Chỉ 2 phút giúp Shopee hiểu shop hơn!',
                content: 'Quảng cáo của Shopee để lại cho bạn ấn tượng gì?Hãy nói cho Shopee nghe tại đây nhé!',
                status: 'unread',
                image: './assets/img/shop/shopee.png',
            },
            {
                title: 'Giao kiện hàng thành công',
                content: 'Kiện hàng <h4>SPXVN029582878637</h4>của đơn hàng <h4>220707R1FS3AXF</h4> đã giao đến bạn',
                status: 'read',
                image: './assets/img/shop/lhdctl.jpg',
            },
            {
                title: 'Chỉ 2 phút giúp Shopee hiểu shop hơn!',
                content: 'Quảng cáo của Shopee để lại cho bạn ấn tượng gì?Hãy nói cho Shopee nghe tại đây nhé!',
                status: 'unread',
                image: './assets/img/shop/shopee.png',
            },
            {
                title: 'Giao kiện hàng thành công',
                content: 'Kiện hàng <h4>SPXVN029582878637</h4>của đơn hàng <h4>220707R1FS3AXF</h4> đã giao đến bạn',
                status: 'read',
                image: './assets/img/shop/lhdctl.jpg',
            },
        ],

        searchHistory: ['Sách - Mộ Đom Đóm (Văn Học)', 'Sách - Khu Vườn Ngôn Từ - Shinkai Makoto'],

        navHistory: [
            'Kim Đồng',
            'One Piece',
            'Khô Gà Thầy Giáo Ba',
            'Conan Tập 85',
            'Conan Tập 97',
            'Conan Tập 86',
            'Máy In Shoptida',
            'Khu Vườn Ngôn Từ Sách',
        ],

        cart: [],
    },

    shop: {
        name: 'IPM Việt Nam',
        status: 'Online 28 phút trước',
        avatar: './assets/img/shop/ipm.jpg',
        mall: './assets/img/icon/ShopeeMall.png',
        product: 564,
        following: 1,
        chatRatio: 88,
        followers: 50999,
        rateStar: 5,
        rateTotal: 108199,
        join: 18,
        imgCarousel: ['./assets/img/shop/crs1.jpg', './assets/img/shop/crs2.jpg', './assets/img/shop/crs3.jpg'],
        categories: [
            {
                name: 'Sản Phẩm',
                pag: '14',
            },
            {
                name: 'SĂN SALE',
                pag: '10',
            },
            {
                name: 'Trinh Thám - Kinh Dị',
                pag: '9',
            },
            {
                name: 'Văn Học Hiện Đại',
                pag: '8',
            },
            {
                name: 'Văn Học Kinh Điển',
                pag: '7',
            },
            {
                name: 'Light Novel',
                pag: '6',
            },
            {
                name: 'Manga - Comic',
                pag: '5',
            },
            {
                name: 'Sách Học Ngữ',
                pag: '1',
            },
            {
                name: 'Sách Thiếu Nhi',
                pag: '1',
            },
            {
                name: 'Tiểu Thuyết',
                pag: '1',
            },
            {
                name: 'Combo Sách',
                pag: '1',
            },
            {
                name: 'Sách Mới',
                pag: '1',
            },
        ],
        products: [
            {
                name: 'Sách - Khu Vườn Ngôn Từ',
                oldPrice: 120000,
                currentPrice: 96000,
                discount: 20,
                sold: 118,
                img: './assets/img/shop/kvnt.jpg',
                id: 1,
            },
            {
                name: 'Sách - Mộ Đom Đóm (Văn Học)',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                sold: 629,
                img: './assets/img/shop/mdd.jpg',
                id: 2,
            },
            {
                name: 'Sách - Những Đứa Trẻ Đuổi Theo Tinh Tú',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 3,
                sold: 404,
                img: './assets/img/shop/ndtdttt.jpg',
            },
            {
                name: 'Sách - 5 Centimet Trên Giây - One More Side',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                id: 4,
                sold: 118,
                img: './assets/img/shop/5cmsoms.jpg',
            },
            {
                name: 'Sách - Bên Kia Mây Trời Là Nơi Hẹn Ước',
                oldPrice: 145000,
                currentPrice: 116000,
                discount: 20,
                id: 5,
                sold: 242,
                img: './assets/img/shop/bkmtlnthu.jpg',
            },
            {
                name: 'Sách - 5 Centimet trên giây',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 6,
                sold: 768,
                img: './assets/img/shop/5cms.jpg',
            },
            {
                name: 'Sách - Khu Vườn Ngôn Từ',
                oldPrice: 120000,
                currentPrice: 96000,
                discount: 20,
                sold: 118,
                img: './assets/img/shop/kvnt.jpg',
                id: 7,
            },
            {
                name: 'Sách - Mộ Đom Đóm (Văn Học)',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                sold: 629,
                img: './assets/img/shop/mdd.jpg',
                id: 8,
            },
            {
                name: 'Sách - Những Đứa Trẻ Đuổi Theo Tinh Tú',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 9,
                sold: 404,
                img: './assets/img/shop/ndtdttt.jpg',
            },
            {
                name: 'Sách - 5 Centimet Trên Giây - One More Side',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                id: 10,
                sold: 118,
                img: './assets/img/shop/5cmsoms.jpg',
            },
            {
                name: 'Sách - Bên Kia Mây Trời Là Nơi Hẹn Ước',
                oldPrice: 145000,
                currentPrice: 116000,
                discount: 20,
                id: 11,
                sold: 242,
                img: './assets/img/shop/bkmtlnthu.jpg',
            },
            {
                name: 'Sách - 5 Centimet trên giây',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 12,
                sold: 768,
                img: './assets/img/shop/5cms.jpg',
            },
            {
                name: 'Sách - Khu Vườn Ngôn Từ',
                oldPrice: 120000,
                currentPrice: 96000,
                discount: 20,
                sold: 118,
                img: './assets/img/shop/kvnt.jpg',
                id: 13,
            },
            {
                name: 'Sách - Mộ Đom Đóm (Văn Học)',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                sold: 629,
                img: './assets/img/shop/mdd.jpg',
                id: 14,
            },
            {
                name: 'Sách - Những Đứa Trẻ Đuổi Theo Tinh Tú',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 15,
                sold: 404,
                img: './assets/img/shop/ndtdttt.jpg',
            },
            {
                name: 'Sách - 5 Centimet Trên Giây - One More Side',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                id: 16,
                sold: 118,
                img: './assets/img/shop/5cmsoms.jpg',
            },
            {
                name: 'Sách - Bên Kia Mây Trời Là Nơi Hẹn Ước',
                oldPrice: 145000,
                currentPrice: 116000,
                discount: 20,
                id: 17,
                sold: 242,
                img: './assets/img/shop/bkmtlnthu.jpg',
            },
            {
                name: 'Sách - 5 Centimet trên giây',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 18,
                sold: 768,
                img: './assets/img/shop/5cms.jpg',
            },
            {
                name: 'Sách - Khu Vườn Ngôn Từ',
                oldPrice: 120000,
                currentPrice: 96000,
                discount: 20,
                sold: 118,
                img: './assets/img/shop/kvnt.jpg',
                id: 19,
            },
            {
                name: 'Sách - Mộ Đom Đóm (Văn Học)',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                sold: 629,
                img: './assets/img/shop/mdd.jpg',
                id: 20,
            },
            {
                name: 'Sách - Những Đứa Trẻ Đuổi Theo Tinh Tú',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 21,
                sold: 404,
                img: './assets/img/shop/ndtdttt.jpg',
            },
            {
                name: 'Sách - 5 Centimet Trên Giây - One More Side',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                id: 22,
                sold: 118,
                img: './assets/img/shop/5cmsoms.jpg',
            },
            {
                name: 'Sách - Bên Kia Mây Trời Là Nơi Hẹn Ước',
                oldPrice: 145000,
                currentPrice: 116000,
                discount: 20,
                id: 23,
                sold: 242,
                img: './assets/img/shop/bkmtlnthu.jpg',
            },
            {
                name: 'Sách - 5 Centimet trên giây',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 24,
                sold: 768,
                img: './assets/img/shop/5cms.jpg',
            },
            {
                name: 'Sách - Khu Vườn Ngôn Từ',
                oldPrice: 120000,
                currentPrice: 96000,
                discount: 20,
                id: 25,
                sold: 118,
                img: './assets/img/shop/kvnt.jpg',
            },
            {
                name: 'Sách - Mộ Đom Đóm (Văn Học)',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                id: 26,
                sold: 629,
                img: './assets/img/shop/mdd.jpg',
            },
            {
                name: 'Sách - Những Đứa Trẻ Đuổi Theo Tinh Tú',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 27,
                sold: 404,
                img: './assets/img/shop/ndtdttt.jpg',
            },
            {
                name: 'Sách - 5 Centimet Trên Giây - One More Side',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                id: 28,
                sold: 118,
                img: './assets/img/shop/5cmsoms.jpg',
            },
            {
                name: 'Sách - Bên Kia Mây Trời Là Nơi Hẹn Ước',
                oldPrice: 145000,
                currentPrice: 116000,
                discount: 20,
                id: 29,
                sold: 242,
                img: './assets/img/shop/bkmtlnthu.jpg',
            },
            {
                name: 'Sách - 5 Centimet trên giây',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 30,
                sold: 768,
                img: './assets/img/shop/5cms.jpg',
            },
        ],
        collections: [
            {
                name: 'Sách - Khu Vườn Ngôn Từ',
                oldPrice: 120000,
                currentPrice: 96000,
                discount: 20,
                sold: 118,
                img: './assets/img/shop/kvnt.jpg',
                id: 1,
            },
            {
                name: 'Sách - Mộ Đom Đóm (Văn Học)',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                sold: 629,
                img: './assets/img/shop/mdd.jpg',
                id: 2,
            },
            {
                name: 'Sách - Những Đứa Trẻ Đuổi Theo Tinh Tú',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 3,
                sold: 404,
                img: './assets/img/shop/ndtdttt.jpg',
            },
            {
                name: 'Sách - 5 Centimet Trên Giây - One More Side',
                oldPrice: 96000,
                currentPrice: 76800,
                discount: 20,
                id: 4,
                sold: 118,
                img: './assets/img/shop/5cmsoms.jpg',
            },
            {
                name: 'Sách - Bên Kia Mây Trời Là Nơi Hẹn Ước',
                oldPrice: 145000,
                currentPrice: 116000,
                discount: 20,
                id: 5,
                sold: 242,
                img: './assets/img/shop/bkmtlnthu.jpg',
            },
            {
                name: 'Sách - 5 Centimet trên giây',
                oldPrice: 60000,
                currentPrice: 48000,
                discount: 20,
                id: 6,
                sold: 768,
                img: './assets/img/shop/5cms.jpg',
            },
        ],
    },
    render: function () {
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)
        // notification
        const notificationIcon = $('.notification--icon')
        const notificationUnread = this.user.notifies.filter((e) => e.status === 'unread').length
        notificationIcon.innerHTML = `<i class="fa-regular fa-bell"></i> Thông Báo <span>3</span>`
        if (!notificationUnread) notificationIcon.innerHTML = `<i class="fa-regular fa-bell"></i>Thông Báo`

        // search
        const htmlSearchHistory = this.user.searchHistory.map((sH) => `<a href="#!">${sH}</a>`)

        $('.history-search-person').innerHTML = htmlSearchHistory.join('')

        const htmlNavHistory = this.user.navHistory.map((nH) => `<a href="#!">${nH}</a>`)

        $('.nav-history').innerHTML = htmlNavHistory.join('')

        // cart

        // shop info
        const htmlShop = `
        <div class="row">
            <div class="shop-info__leading">
                <div class="shop-background">
                    <div class="shop-info__leading-section">
                        <div class="seller-portrait">
                            <a href="#!" class="avatar">
                                <img src=${this.shop.avatar} alt="" width=80 height=80>
                                <div class="avatar-badge">
                                    <img src="${this.shop.mall}" alt="">
                                </div>
                            </a>
                            <!--  -->
                            <div class="seller-info">
                                <h3>${this.shop.name}</h3>
                                <p>${this.shop.status}</p>
                            </div>
                        </div>
                        <!--  -->
                        <div class="shop-info--btn">
                            <div class="btn btn--follow"><button><i class="fa-solid fa-plus"></i>THEO DÕI</button></div>
                            <div class="btn btn--chat"><button><i class="fa-solid fa-comments"></i>CHAT</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shop-info__list">
                <div class="shop-info__list-left">
                    <div class="shop-info__list--item"><a href="#!"><i class="fa-solid fa-shop"></i>Sản Phẩm: <span>${
                        this.shop.product
                    }</span></a></div>   
                    <div class="shop-info__list--item"><i class="fa-solid fa-user-plus"></i>Đang Theo: <span>${
                        this.shop.following
                    }</span></div>
                    <div class="shop-info__list--item"><i class="fa-regular fa-message"></i>Tỉ Lệ Phản Hồi Chat: <span> ${
                        this.shop.chatRatio
                    }% (Trong Vài Giờ)</span></div>
                </div>
                <div class="shop-info__list-right">
                    <div class="shop-info__list--item item--followers"><i class="fa-solid fa-users"></i>Người Theo Dõi: <span>${
                        this.shop.followers > 1000
                            ? (parseInt(this.shop.followers / 100) / 10).toFixed(1).toString().replace('.', ',') + 'k'
                            : this.shop.followers
                    }</span></div>
                    <div class="shop-info__list--item"><a href="#!"><i class="fa-regular fa-star"></i>Đánh Giá: <span>${this.shop.rateStar.toFixed(
                        1,
                    )} (${
            this.shop.rateTotal > 1000
                ? (parseInt(this.shop.rateTotal / 100) / 10).toFixed(1).toString().replace('.', ',') + 'k'
                : this.shop.rateTotal
        } Đánh Giá)</span></a></div>   
                    <div class="shop-info__list--item"><i class="fa-solid fa-user-check"></i>Tham Gia: <span>${
                        this.shop.join
                    } Tháng Trước</span></div>
                </div>
            </div>
        </div>    
        `
        $('.shop-info').innerHTML = htmlShop

        // shop-menu
        if (this.shop.categories.length > 5) {
            const htmlShopMenu = this.shop.categories.map((category, i) => {
                if (i < 5) {
                    if (i == 0) {
                        return `<div class="shop-menu--item-show"><a class="shop-menu--item" data-index = "${i}" href="#products-section">TẤT CẢ SẢN PHẨM</a></div>`
                    }
                    return `<div class="shop-menu--item-show"><a class="shop-menu--item" data-index = "${i}" href="#products-section">${category.name}</a></div>`
                }
            })

            $('.shop-menu').innerHTML = `
            <div class="shop-menu__list"></div>
            <div class="shop-menu--more"></div>`

            $('.shop-menu__list').innerHTML =
                `<div class="shop-menu--item-show"><a class="shop-menu--item" href="#">Dạo</a></div>` +
                htmlShopMenu.join('')
            $('.shop-menu--more').innerHTML = `
            <div class="more-btn"><span>Thêm</span><i class="fa-solid fa-sort-down"></i><i class="fa-solid fa-sort-up"></i></div>
            `
        } else {
            const htmlShopMenu = this.shop.categories.map((category, i) => {
                if (i < 5) {
                    if (i == 0) {
                        return `<div class="shop-menu--item-show"><a class="shop-menu--item" data-index = "${i}" href="#products-section">TẤT CẢ SẢN PHẨM</a></div>`
                    }
                    return `<div class="shop-menu--item-show"><a class="shop-menu--item" data-index = "${i}" href="#products-section">${category.name}</a></div>`
                }
            })

            $('.shop-menu').innerHTML = `<div class="shop-menu__list"></div>`

            $('.shop-menu__list').innerHTML =
                `<div class="shop-menu--item-show"><a class="shop-menu--item" href="#">Dạo</a></div>` +
                htmlShopMenu.join('')
        }
        // collection
        const collection = this.shop.collections.map(
            (e) => `
        <div class="column-6">
            <a href="#" class="product" data-index="${e.id}">
                <div class="product-img">
                    <img alt="${e.name}" src="${e.img}">
                    <div class="label-mall">
                        <div class="label"></div>
                    </div>
                    <div class="label-discount">
                        <div class="discount">
                            <span class="percent">${e.discount}%</span>
                            <span>GIẢM</span>
                        </div>
                    </div>
                    <div class="img-overlay"><img alt="" src="./assets/img/background/freeship.png"></div>
                </div>
                <div class="product-info">
                    <div class="product-name">${e.name}"</div>
                    <div class="product-price">
                        <div class="price-old">₫${(e.oldPrice / 1000).toFixed(3)}"</div>
                        <div class="price-new"><span>₫</span>${(e.currentPrice / 1000).toFixed(3)}</div>
                    </div>
                    <div class="product-selling">
                        <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="sold">Đã bán ${
                            e.sold > 1000
                                ? (parseInt(e.sold / 100) / 10).toFixed(1).toString().replace('.', ',') + 'k'
                                : e.sold
                        }</div>
                    </div>
                    <div class="product-place">Hà Nội</div>
                </div>
            </a>
        </div>
        `,
        )

        $('.shop-collection .products-list').innerHTML = `
        <div class="row">
            ${collection.join('')}
        </div>
        `
        // shop imgCarousel
        const imgCarouselSection = $('.imgCarousel--section')

        const imgShopDecoList = this.shop.imgCarousel.map(
            (img, i) => `<a href="#!" class="imgCarousel--item"><img src="${img}" alt=""></a>`,
        )

        const shopDecoImg = [imgShopDecoList[imgShopDecoList.length - 1], ...imgShopDecoList, imgShopDecoList[0]]

        imgCarouselSection.innerHTML = shopDecoImg.join('')

        $$('.carousel-dot')[this.currentImgCarouselDot].classList.add('carousel-dot--active')

        // category
        const htmlCategories = this.shop.categories.map(
            (category, i) => `
            <div class="category-item category-item--${
                this.currentCategoryIndex == i ? 'select' : ''
            }" data-index="${i}"><i class="fa-solid fa-caret-right"></i>${category.name}</div>`,
        )

        $('.category-list').innerHTML = htmlCategories.join('')
    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentCategory', {
            get: () => this.shop.categories[this.currentCategoryIndex],
        })
    },

    loadCart: function () {
        const $ = document.querySelector.bind(document)
        const quantityCartProduct = this.user.cart.length

        $('.cart-icon').innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'

        const spanCart = document.createElement('span')

        spanCart.innerHTML = quantityCartProduct

        if (quantityCartProduct) $('.cart-icon').appendChild(spanCart)
    },

    sortProducts: function () {
        switch (this.currentProductSort) {
            case 'popular':
                this.shop.products.sort(function (a, b) {
                    return a.id - b.id
                })
                break
            case 'priceUp':
                this.shop.products.sort(function (a, b) {
                    return a.currentPrice - b.currentPrice
                })
                break
            case 'priceDown':
                this.shop.products.sort(function (a, b) {
                    return -(a.currentPrice - b.currentPrice)
                })
                break
            case 'selling':
                this.shop.products.sort(function (a, b) {
                    return -(a.sold - b.sold)
                })
                break
            case 'new':
                this.shop.products.sort(function (a, b) {
                    return -(a.id - b.id)
                })
                break
        }
    },

    loadProduct: function () {
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)
        const miniPagCurrent = $('.mini-pagination__state--current')
        const miniPagBtnL = $('.mini-pagination-button-left')
        const miniPagBtnR = $('.mini-pagination-button-right')
        const miniPagTotal = $('.mini-pagination__state--total')
        const listPagination = $('.products-list__pagination')

        this.sortProducts()
        $('.category-item.category-item--select').classList.remove('category-item--select')
        $$('.category-item')[this.currentCategoryIndex].classList.add('category-item--select')

        // render products
        const products = this.shop.products.map(
            (e) => `
            <div class="column-5">
                <a href="#" class="product" data-index="${e.id}">
                    <div class="product-img">
                        <img alt="${e.name}" src="${e.img}">
                        <div class="label-mall">
                            <div class="label"></div>
                        </div>
                        <div class="label-discount">
                            <div class="discount">
                                <span class="percent">${e.discount}%</span>
                                <span>GIẢM</span>
                            </div>
                        </div>
                        <div class="img-overlay"><img alt="" src="./assets/img/background/freeship.png"></div>
                    </div>
                    <div class="product-info">
                        <div class="product-name">${e.name}"</div>
                        <div class="product-price">
                            <div class="price-old">₫${(e.oldPrice / 1000).toFixed(3)}"</div>
                            <div class="price-new"><span>₫</span>${(e.currentPrice / 1000).toFixed(3)}</div>
                        </div>
                        <div class="product-selling">
                            <div class="rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="sold">Đã bán ${
                                e.sold > 1000
                                    ? (parseInt(e.sold / 100) / 10).toFixed(1).toString().replace('.', ',') + 'k'
                                    : e.sold
                            }</div>
                        </div>
                        <div class="product-place">Hà Nội</div>
                    </div>
                </a>
            </div>
        `,
        )
        $('#products-section .products-list__container').innerHTML = `
         <div class="row">
            ${products.join('')}
        </div>
        `
        //  render miniPagination
        miniPagCurrent.innerHTML = this.currentPagProduct
        miniPagTotal.innerHTML = this.currentCategory.pag
        miniPagCurrent.innerHTML == 1 ? miniPagBtnL.classList.add('disabled') : miniPagBtnL.classList.remove('disabled')
        miniPagCurrent.innerHTML == miniPagTotal.innerHTML
            ? miniPagBtnR.classList.add('disabled')
            : miniPagBtnR.classList.remove('disabled')
    },

    runInterval: function () {
        this.interval = setInterval((e) => {
            this.currentImgCarouselTransition -= 1200
            this.isCarousel = true
            this.currentImgCarouselDot++
            this.loadShopDeco()
            setTimeout(() => {
                this.isCarousel = false
            }, 500)
        }, 5000)
    },

    clearIntervalShopDeco: function () {
        clearInterval(this.interval)
    },

    loadShopDeco: function () {
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)
        const imgCarouselSection = $('.imgCarousel--section')
        imgCarouselSection.style = `transform: translate(${this.currentImgCarouselTransition}px, 0px);transition: all 500ms ease 0s`

        switch (this.currentImgCarouselTransition) {
            case -4800:
                setTimeout(() => {
                    this.currentImgCarouselTransition = -1200
                    imgCarouselSection.style = `transform: translate(${this.currentImgCarouselTransition}px, 0px);transition: all 0 ease 0s`
                }, 500)
                break
            case 0:
                setTimeout(() => {
                    this.currentImgCarouselTransition = -3600
                    imgCarouselSection.style = `transform: translate(${this.currentImgCarouselTransition}px, 0px);transition: all 0 ease 0s`
                }, 500)
        }

        switch (this.currentImgCarouselDot) {
            case 3:
                this.currentImgCarouselDot = 0
                break
            case -1:
                this.currentImgCarouselDot = 2
        }

        $$('.carousel-dot')[this.currentImgCarouselDot].classList.add('carousel-dot--active')

        $$('.carousel-dot').forEach((e, i) => {
            if (!(this.currentImgCarouselDot == i) && e.classList.contains('carousel-dot--active'))
                e.classList.remove('carousel-dot--active')
        })
        setTimeout(() => {
            imgCarouselSection.style = `transform: translate(${this.currentImgCarouselTransition}px, 0px)`
        }, 500)
    },

    chat: function () {
        const $ = document.querySelector.bind(document)
        const buttonChat = document.createElement('button')
        const chat = $('#chat')

        // button chat
        buttonChat.classList.add('btn-chat')
        buttonChat.innerHTML = `
                <i class="fa-solid fa-comments"></i>
                <span class="title">Chat</span>
                `
        chat.appendChild(buttonChat)

        // click
        const showChat = () => {
            const chatWindow = document.createElement('div')
            const options = document.createElement('div')
            chatWindow.classList.add('chatWindow')
            options.classList.add('options')
            chatWindow.innerHTML = `
            <div class="chatWindow__header">
                    <span>Chat</span>
                    <div class="chatWindow__header--btn">
                        <button class="btn-right" title="Ẩn cửa sổ Chat"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="chat-icon"><path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H9v-1h5V2H9V1h5zM2 13v1h1v1H2a1 1 0 01-.993-.883L1 14v-1h1zm6 1v1H4v-1h4zM2 3.999V12H1V3.999h1zm5.854 1.319l2.828 2.828a.5.5 0 010 .708l-2.828 2.828a.5.5 0 11-.708-.707L9.121 9H4.5a.5.5 0 010-1h4.621L7.146 6.025a.5.5 0 11.708-.707zM3 1v1H2v.999H1V2a1 1 0 01.883-.993L2 1h1zm5 0v1H4V1h4z"></path></svg></i></button>
                        <button class="btn-down" title="Thu gọn"><i><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zm0 1H2v12h12V2zm-2.904 5.268l-2.828 2.828a.5.5 0 01-.707 0L4.732 7.268a.5.5 0 11.707-.707l2.475 2.475L10.39 6.56a.5.5 0 11.707.707z"></path></svg></i></button>
                    </div>
                </div>
                <!--  -->
                <div class="chatWindow__main">
                    <div class="chatWindow__main--mess">
                        <img src="./assets/img/background/chat.png" alt="" width="162" height="144">
                        <p>Xin Chào!</p>
                    </div>
                    <!--  -->
                    <div class="chatWindow__main--list">
                        <div class="header">
                            <div class="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder="Tìm theo tên khách hàng">
                            </div>
                            <div class="options">
                                Tất cả
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="main">
                            <img src="./assets/img/background/chat1.png" alt="" width="120" height="80">
                            <p>Không tìm thấy cuộc hội thoại nào.</p>
                        </div>
                    </div>
                </div>
            `

            chat.removeChild(buttonChat)
            chat.appendChild(chatWindow)

            $('.btn-down').onclick = () => {
                $('.chatWindow').style = 'animation: fadeOut ease .4s;'
                setTimeout(() => {
                    chat.removeChild(chatWindow)

                    chat.appendChild(buttonChat)
                }, 300)
            }

            $('.search input').onfocus = () => {
                $('.header .options').style = 'display: none'
                $('.search').style = 'border: 1px solid #2673dd'
                $('.search input').style = 'width: 100%'
            }
            $('.search input').onblur = () => {
                $('.header .options').style = 'display: flex'
                $('.search').style = 'border: none'
                $('.search input').style = 'width: 147px'
            }

            $('.btn-right').onclick = function () {
                $('.chatWindow').classList.toggle('half')
                if ($('.chatWindow').classList.contains('half')) {
                    $('.chatWindow').style = 'width: 224px'
                    $('.chatWindow__main--mess').style = 'width: 0;opacity: 0'
                    this.title = 'Xem cửa sổ Chat'
                    this.innerHTML = `
                    <i class="_3kEAcT1Mk5 src-pages-ChatWindow-index__show-dialog--1vT1i src-pages-ChatWindow-index__operator-item--JM24S"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="chat-icon"><path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H9v-1h5V2H9V1h5zM2 13v1h1v1H2a1 1 0 01-.993-.883L1 14v-1h1zm6 1v1H4v-1h4zM2 3.999V12H1V3.999h1zm4.975 1.319a.5.5 0 01.707.707L5.707 8h4.621a.5.5 0 010 1h-4.62l1.974 1.975a.5.5 0 01-.707.707L4.146 8.854a.5.5 0 010-.708zM3 1v1H2v.999H1V2a1 1 0 01.883-.993L2 1h1zm5 0v1H4V1h4z"></path></svg></i>
                    `
                } else {
                    $('.chatWindow').style = 'width: 508px'
                    $('.chatWindow__main--mess').style = 'width: 286px;opacity: 0'
                    this.title = 'Ẩn cửa sổ Chat'
                    setTimeout(() => {
                        $('.chatWindow__main--mess').style = 'opacity: 1'
                    }, 150)
                    this.innerHTML = `
                    <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="chat-icon"><path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H9v-1h5V2H9V1h5zM2 13v1h1v1H2a1 1 0 01-.993-.883L1 14v-1h1zm6 1v1H4v-1h4zM2 3.999V12H1V3.999h1zm5.854 1.319l2.828 2.828a.5.5 0 010 .708l-2.828 2.828a.5.5 0 11-.708-.707L9.121 9H4.5a.5.5 0 010-1h4.621L7.146 6.025a.5.5 0 11.708-.707zM3 1v1H2v.999H1V2a1 1 0 01.883-.993L2 1h1zm5 0v1H4V1h4z"></path></svg></i>
                    `
                }
            }
        }
        buttonChat.onclick = showChat
        $('.shop-info--btn .btn--chat').onclick = showChat
    },

    handleEvent: function () {
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)
        // scroll up-btn
        const up = document.querySelector('#up')

        window.onscroll = (e) => {
            if (document.documentElement.scrollTop > 750) up.style = 'display: flex'
            else up.style = 'display: none'
        }

        function toggle(parentDiv, className, content, animation, cb) {
            const newDiv = document.createElement('div')
            parentDiv.onmouseover = (e) => {
                if (!(parentDiv.lastChild == newDiv)) {
                    newDiv.style = `animation: ${animation}In ease-in .2s;`
                    newDiv.classList.add(className)
                    newDiv.innerHTML = content
                    parentDiv.appendChild(newDiv)
                }
                if (cb) cb(parentDiv)
            }
            parentDiv.onmouseleave = (e) => {
                newDiv.style = `animation: ${animation}Out ease-in .2s;`
                newDiv.addEventListener(
                    'animationend',
                    () => {
                        if (parentDiv.lastChild == newDiv) {
                            parentDiv.removeChild(newDiv)
                        }
                    },
                    { once: true },
                )
            }
        }
        // notification
        const notificationList = this.user.notifies.map(
            (notification) => `
            <div class="new-notification__item notification-${notification.status}">
                <a href="#!">
                    <img src="${notification.image}" alt="">
                    <div class="new-notification__item-content">
                        <h3>${notification.title}</h3>
                            <p>${notification.content}</p>
                    </div>
                </a>
            </div>
        `,
        )
        toggle(
            $('.navbar__item--notification'),
            'new-notification',
            `<div class="new-notification__header">Thông Báo Mới Nhận</div>
            <div class="new-notification__list">
                ${notificationList.join('\n')}
            </div>
            <a class="new-notification__footer" href="#!"><span>Xem tất cả</span></a>`,
            'fade',
            (e) => (e.querySelector('.notification--icon').innerHTML = `<i class="fa-regular fa-bell"></i> Thông Báo`),
        )

        // language
        toggle(
            $('.navbar__item--lang'),
            'lang__list',
            `
        <a href="#!"><span>Tiếng Việt</span></a>
        <a href="#!"><span>English</span></a>`,
            'fade',
        )
        // user
        toggle(
            $('.navbar__item--user'),
            'user__nav',
            `
        <a href="#!"><span>Tài Khoản Của Tôi</span></a>
        <a href="#!"><span>Đơn Mua</span></a>
        <a href="#!"><span>Đăng Xuất</span></a>`,
            'fade',
        )
        // search input
        const searchInput = $('.search-input')

        searchInput.onclick = (e) => {
            searchBarHistory.classList.add('show')

            $('body').onclick = () => {
                searchBarHistory.classList.remove('show')
            }
            e.stopPropagation()

            searchBarHistory.onclick = (e) => {
                e.stopPropagation()
            }
            $('.search-bar-selector').onclick = (e) => {
                e.stopPropagation()
            }
        }
        // search bar option
        const searchOptions = $$('.search-bar-selector--options .option')

        const searchBarHistory = $('.search-bar-history')

        searchOptions.forEach((a) => {
            a.onclick = () => {
                searchOptions.forEach((a) => {
                    a.classList.remove('option-check')
                })

                a.classList.add('option-check')

                $('.search-bar-selector--label').innerHTML = `${a.querySelector('.option-name').firstChild.nodeValue}`

                const attr = document.createAttribute('placeholder')

                if ($('.option--in-shopee').classList.contains('option-check')) {
                    $('.search-bar-title').classList.remove('show')

                    $('.search-bar-hints').classList.add('show')

                    attr.value = `${$('.search-bar-hints--title').firstChild.nodeValue}`

                    searchInput.setAttributeNode(attr)
                } else {
                    $('.search-bar-title').classList.add('show')

                    $('.search-bar-hints').classList.remove('show')

                    attr.value = `Tìm trong ${$('.option-check .option-name').firstChild.nodeValue.slice(6)}`

                    searchInput.setAttributeNode(attr)
                }
            }
        })
        // cart
        const cart = $('.cart-wrap')

        const htmlCartProducts = this.user.cart.map(
            (product) => `
        <a href="#!" class="product">
            <img src="${product.img}" alt="">
            <div class="product-info">
                <p>${product.name}</p>
                <span>₫${(product.currentPrice / 1000).toFixed(3)}</span>
            </div>
        </a>`,
        )
        const quantityCartProduct = this.user.cart.length
        if (quantityCartProduct == 0) {
            toggle(
                cart,
                'cart-list',
                `
            <div class="cart-list__product-0">
                <div class="cart-list__product-0--icon"></div>
                <p>Chưa có sản phẩm</p>
            </div>`,
                'fade',
            )
        } else {
            toggle(
                cart,
                'cart-list',
                `
            <div class="cart-list__header">Sản Phẩm Mới Thêm</div>
            <div class="cart-list__product">
                ${htmlCartProducts.join('')}
            </div>
            <div class="cart-list__footer">
                <span>${quantityCartProduct > 5 ? quantityCartProduct - 5 + ' Thêm Hàng Vào Giỏ' : ''}</span>
                <a href="#!" class="watch-product">Xem Giỏ Hàng</a>
            </div>`,
                'fade',
            )
        }
        // shop menu more
        const htmlShopMenuMore = this.shop.categories.map((category, i) => {
            if (i >= 5) {
                return `<div class="shop-menu--item-show"><a class="shop-menu--item" data-index = "${i}" href="#products-section">${category.name}</a></div>`
            }
        })
        toggle($('.shop-menu--more'), 'more-nav', `<ul>${htmlShopMenuMore.join('')}</ul>`, 'op')
        // follow
        const btnFollow = $('.btn--follow button')
        btnFollow.onclick = () => {
            this.user.userFollowing = !this.user.userFollowing
            const btnFollow = $('.btn--follow button')

            if (this.user.userFollowing) {
                btnFollow.classList.add('follow')
                btnFollow.innerHTML = 'ĐANG THEO'
            } else {
                btnFollow.innerHTML = '<i class="fa-solid fa-plus"></i>THEO DÕI'
                btnFollow.classList.remove('follow')
            }
        }
        // shop menu
        $('.shop-menu').onclick = (e) => {
            const categoryNode = e.target.closest('.shop-menu--item')
            if (categoryNode) {
                this.currentCategoryIndex = categoryNode.dataset.index
                this.currentPagProduct = 1
                this.loadProduct()
            }
        }
        // shop imgCarousel
        $('.imgCarousel-btn--right').onclick = () => {
            if (!this.isCarousel) {
                this.isCarousel = true
                this.clearIntervalShopDeco()
                this.currentImgCarouselDot++
                this.currentImgCarouselTransition -= 1200
                this.loadShopDeco()
                setTimeout(() => {
                    this.isCarousel = false
                    this.runInterval()
                }, 500)
            }
        }
        $('.imgCarousel-btn--left').onclick = () => {
            if (!this.isCarousel) {
                this.clearIntervalShopDeco()
                this.isCarousel = true
                this.currentImgCarouselDot--
                this.currentImgCarouselTransition += 1200
                this.loadShopDeco()
                setTimeout(() => {
                    this.isCarousel = false
                    this.runInterval()
                }, 500)
            }
        }
        $$('.carousel-dot').forEach((e, i) => {
            e.onclick = () => {
                if (!this.isCarousel) {
                    this.isCarousel = true
                    this.clearIntervalShopDeco()
                    this.currentImgCarouselDot = i
                    switch (i) {
                        case 0:
                            this.currentImgCarouselTransition = -1200
                            break
                        case 1:
                            this.currentImgCarouselTransition = -2400
                            break
                        case 2:
                            this.currentImgCarouselTransition = -3600
                            break
                    }
                    this.loadShopDeco()
                    setTimeout(() => {
                        this.isCarousel = false
                        this.runInterval()
                    }, 500)
                }
            }
        })
        // category
        $('.category-list').onclick = (e) => {
            const categoryNode = e.target.closest('.category-item')
            this.currentCategoryIndex = categoryNode.dataset.index
            this.currentPagProduct = 1
            this.loadProduct()
        }
        // product option
        const productOptions = $$('.product-option')

        productOptions.forEach((a, i) => {
            a.onclick = () => {
                switch (i) {
                    case 0:
                        this.currentProductSort = 'popular'
                        break
                    case 1:
                        this.currentProductSort = 'new'
                        break
                    case 2:
                        this.currentProductSort = 'selling'
                        break
                }

                productOptions.forEach((a) => {
                    a.classList.remove('product-option-select')

                    priceOptions.forEach((a) => {
                        a.classList.remove('price-option-tick')
                    })

                    $('.product-option-price--status').classList.remove('price-option-tick')
                })
                a.classList.add('product-option-select')

                $('.product-option-price--status span').innerHTML = `Giá`

                this.currentPagProduct = 1

                this.loadProduct()
            }
        })
        // price-option
        const priceOptions = $$('.price-option')

        priceOptions.forEach((a, i) => {
            a.onclick = () => {
                switch (i) {
                    case 0:
                        this.currentProductSort = 'priceUp'
                        break
                    case 1:
                        this.currentProductSort = 'priceDown'
                        break
                }

                priceOptions.forEach((a) => {
                    a.classList.remove('price-option-tick')
                })

                productOptions.forEach((a) => {
                    a.classList.remove('product-option-select')
                })

                $('.product-option-price--status').classList.add('price-option-tick')

                a.classList.add('price-option-tick')

                $('.product-option-price--status span').innerHTML = `${a.firstChild.nodeValue}`

                this.currentPagProduct = 1

                this.loadProduct()
            }
        })
        // cart product
        $$('.product').forEach((e) => {
            e.onclick = (e) => {
                const productId = e.target.closest('.product').dataset.index
                this.shop.products.forEach((product) => {
                    if (product.id == productId) {
                        this.user.cart.unshift(product)
                    }
                })
                this.loadCart()
                this.handleEvent()
            }
        })

        // pagination
        const miniPagBtnL = $('.mini-pagination-button-left')
        const miniPagBtnR = $('.mini-pagination-button-right')

        miniPagBtnR.onclick = (e) => {
            if (!miniPagBtnR.classList.contains('disabled')) {
                this.currentPagProduct++

                this.loadProduct()
            }
        }

        miniPagBtnL.onclick = (e) => {
            if (!miniPagBtnL.classList.contains('disabled')) {
                this.currentPagProduct--

                this.loadProduct()
            }
        }

        $('.pagination-btn-right').onclick = (e) => {
            if (this.currentPagProduct != this.currentCategory.pag) {
                this.currentPagProduct++
                this.loadProduct()
            }
        }
        $('.pagination-btn-left').onclick = (e) => {
            if (this.currentPagProduct != 1) {
                this.currentPagProduct--
                this.loadProduct()
            }
        }
    },

    start: function () {
        this.defineProperties()
        this.render()
        this.chat()
        this.loadCart()
        this.loadProduct()
        this.runInterval()

        this.handleEvent()
    },
}

web.start()
