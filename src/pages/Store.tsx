import { useState, useEffect } from 'react'
import Icon from '@/components/ui/icon'

interface Product {
  id: string
  name: string
  price: number
  oldPrice?: number
  image: string
  discount?: number
  currency?: 'coins' | 'gems'
  pricePrefix?: string
}

const categories = ['Моды X5', 'Привилегии', 'Предметы', 'Оружие', 'Расходники']

const allProducts: (Product & { category: string })[] = [
  // Моды X5
  { id: '1', category: 'Моды X5', name: 'Вандал про', price: 1000, oldPrice: 2198, discount: 50, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/bd1973b6-d9d5-48bd-b51a-68824f00c18f.jpg', currency: 'gems' },
  { id: '2', category: 'Моды X5', name: 'Вандал', price: 600, oldPrice: 1299, discount: 50, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/bd1973b6-d9d5-48bd-b51a-68824f00c18f.jpg', currency: 'gems' },
  { id: '3', category: 'Моды X5', name: 'Жёсткий', price: 340, oldPrice: 699, discount: 50, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/bd1973b6-d9d5-48bd-b51a-68824f00c18f.jpg', currency: 'gems' },
  { id: '4', category: 'Моды X5', name: 'Шкет', price: 90, oldPrice: 205, discount: 50, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/bd1973b6-d9d5-48bd-b51a-68824f00c18f.jpg', currency: 'gems' },
  { id: '5', category: 'Моды X5', name: 'Все киты', price: 600, oldPrice: 1299, discount: 50, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
  { id: '6', category: 'Моды X5', name: 'Неуязвимый', price: 69, oldPrice: 138, discount: 50, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/bd1973b6-d9d5-48bd-b51a-68824f00c18f.jpg', currency: 'gems' },
  { id: '7', category: 'Моды X5', name: 'Пропуск очереди', price: 49, oldPrice: 98, discount: 50, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/c5364bf0-a676-41a2-9da3-23bea2c9dd46.jpg', currency: 'gems' },
  { id: '8', category: 'Моды X5', name: 'Все изучения', price: 99, oldPrice: 198, discount: 50, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
  { id: '9', category: 'Моды X5', name: 'Неломайка', price: 49, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
  { id: '10', category: 'Моды X5', name: 'Бесконечные патроны...', price: 99, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/715a8f06-add6-4f24-b72b-3dbf64e27594.jpg', currency: 'gems' },
  // Предметы
  { id: '11', category: 'Предметы', name: 'Портативная турель', price: 35, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/9985eb6f-5bd2-4060-9c20-6e97c8fad1bc.jpg', currency: 'gems' },
  { id: '12', category: 'Предметы', name: 'Миникоптер', price: 99, pricePrefix: 'от', image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/cd139a5a-5de0-40e9-95c3-38678876b0c1.jpg', currency: 'gems' },
  { id: '13', category: 'Предметы', name: 'x10 рейты', price: 99, oldPrice: 198, discount: 50, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
  { id: '14', category: 'Предметы', name: 'Все ящики', price: 9, pricePrefix: 'от', image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/a32b7e54-ce29-4acb-b4da-8beb6161f790.jpg', currency: 'gems' },
  { id: '15', category: 'Предметы', name: 'Гранаты', price: 19, pricePrefix: 'от', image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/e0ae431d-5a04-4b91-b321-71dc1cb92031.jpg', currency: 'gems' },
  { id: '16', category: 'Предметы', name: 'Рюкзак 96 слотов', price: 39, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
  { id: '17', category: 'Предметы', name: 'Генетика', price: 39, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
  { id: '18', category: 'Предметы', name: 'Верстаки', price: 9, pricePrefix: 'от', image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
  { id: '19', category: 'Предметы', name: 'Транспортный вертол...', price: 15, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/cd139a5a-5de0-40e9-95c3-38678876b0c1.jpg', currency: 'gems' },
  { id: '20', category: 'Предметы', name: 'Переработчик', price: 9, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
  // Оружие
  { id: '21', category: 'Оружие', name: 'Ракетница', price: 29, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/715a8f06-add6-4f24-b72b-3dbf64e27594.jpg', currency: 'gems' },
  { id: '22', category: 'Оружие', name: 'Ракета', price: 59, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/715a8f06-add6-4f24-b72b-3dbf64e27594.jpg', currency: 'gems' },
  { id: '23', category: 'Оружие', name: 'Скоростная ракета', price: 59, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/715a8f06-add6-4f24-b72b-3dbf64e27594.jpg', currency: 'gems' },
  { id: '24', category: 'Оружие', name: 'Многозарядный грана...', price: 19, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/e0ae431d-5a04-4b91-b321-71dc1cb92031.jpg', currency: 'gems' },
  { id: '25', category: 'Оружие', name: '40мм Фугасная граната', price: 49, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/e0ae431d-5a04-4b91-b321-71dc1cb92031.jpg', currency: 'gems' },
  { id: '26', category: 'Оружие', name: 'ПЗРК', price: 9, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/715a8f06-add6-4f24-b72b-3dbf64e27594.jpg', currency: 'gems' },
  { id: '27', category: 'Оружие', name: 'C4', price: 39, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/e0ae431d-5a04-4b91-b321-71dc1cb92031.jpg', currency: 'gems' },
  { id: '28', category: 'Оружие', name: 'Автоматическая Турель', price: 69, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/9985eb6f-5bd2-4060-9c20-6e97c8fad1bc.jpg', currency: 'gems' },
  // Расходники
  { id: '29', category: 'Расходники', name: 'Пироги', price: 5, pricePrefix: 'от', image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
  { id: '30', category: 'Расходники', name: 'Бобовая граната', price: 15, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/e0ae431d-5a04-4b91-b321-71dc1cb92031.jpg', currency: 'gems' },
  { id: '31', category: 'Расходники', name: 'Граната F1', price: 10, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/e0ae431d-5a04-4b91-b321-71dc1cb92031.jpg', currency: 'gems' },
  { id: '32', category: 'Расходники', name: 'Дизель', price: 59, image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
  { id: '33', category: 'Расходники', name: 'Топливо', price: 19, pricePrefix: 'от', image: 'https://cdn.poehali.dev/projects/52cce8a2-a74d-44e5-aedc-a462581c2690/files/1095ec28-d773-4c4f-a9fd-c02937971343.jpg', currency: 'gems' },
]

const navLinks = [
  { label: 'Магазин', href: '/store', icon: 'ShoppingCart', active: true },
  { label: 'Сервера', href: '#', icon: 'Server' },
  { label: 'Помощь', href: '#', icon: 'HelpCircle' },
  { label: 'Бан-лист', href: '#', icon: 'Ban' },
]

type FullProduct = Product & { category: string }

export default function Store() {
  const [activeCategory, setActiveCategory] = useState('Моды X5')
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<FullProduct | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)

  const filtered = allProducts.filter(p => p.category === activeCategory)

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedProduct])

  const openModal = (product: FullProduct) => {
    setSelectedProduct(product)
    setQuantity(1)
    setShowSuccess(false)
  }

  const closeModal = () => setSelectedProduct(null)

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#141414', color: '#fff', fontFamily: "'Inter', sans-serif" }}
    >
      {/* STICKY HEADER */}
      <header
        className="sticky top-0 z-50 flex items-center justify-center px-6 h-14 border-b"
        style={{ backgroundColor: 'rgba(20,20,20,0.96)', borderColor: '#2a2a2a', backdropFilter: 'blur(10px)' }}
      >
        <div className="flex items-center gap-1 w-full max-w-5xl">
          {/* Logo */}
          <a href="/" className="flex items-center mr-4 shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center relative"
              style={{ backgroundColor: '#1e293b' }}
            >
              <Icon name="Flame" size={18} style={{ color: '#FF4D00' }} />
              <span
                className="absolute -bottom-1 -right-1 text-[9px] font-bold px-1 rounded"
                style={{ backgroundColor: '#22c55e', color: '#000' }}
              >
                254
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="flex items-center gap-1 flex-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors"
                style={{
                  color: link.active ? '#fff' : '#6b7280',
                  backgroundColor: link.active ? '#1f2937' : 'transparent',
                }}
              >
                <Icon name={link.icon} size={14} />
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-sm" style={{ color: '#6b7280' }}>0</span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#374151' }}
            >
              <Icon name="User" size={16} style={{ color: '#9ca3af' }} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* HERO BANNER */}
        <div
          className="relative rounded-2xl overflow-hidden mb-8"
          style={{
            background: 'linear-gradient(135deg, #0f2a2a 0%, #0a1f2e 50%, #0d1b2e 100%)',
            minHeight: 260,
          }}
        >
          {/* Teal glow */}
          <div
            className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 70% 50%, rgba(20,184,166,0.25) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 p-8 md:p-10 flex items-center justify-between">
            <div className="max-w-xs">
              <h2 className="text-3xl font-bold mb-3">
                🔥 Бонусные киты
              </h2>
              <p className="text-sm mb-6" style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                Хочешь больше ресурсов? Привяжи наши соцсети и открой доступ к бонусным китам!
              </p>
              <button
                className="px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: '#14b8a6', color: '#fff' }}
              >
                Подробнее ℹ
              </button>
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center gap-4 mr-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#229ED9', opacity: 0.9 }}
              >
                <Icon name="Send" size={28} style={{ color: '#fff' }} />
              </div>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#5865F2', opacity: 0.9 }}
              >
                <Icon name="MessageCircle" size={28} style={{ color: '#fff' }} />
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 right-4 flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#14b8a6' }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#374151' }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#374151' }} />
          </div>
        </div>

        {/* CATEGORY TABS + FILTER */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-md text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeCategory === cat ? '#fff' : 'transparent',
                  color: activeCategory === cat ? '#000' : '#6b7280',
                  border: activeCategory === cat ? 'none' : '1px solid #2a2a2a',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors"
            style={{ color: '#9ca3af', border: '1px solid #2a2a2a', backgroundColor: 'transparent' }}
          >
            <Icon name="SlidersHorizontal" size={14} />
            Все
            <Icon name="ChevronDown" size={14} />
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 border-l border-t" style={{ borderColor: '#2a2a2a' }}>
          {filtered.map(product => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="relative cursor-pointer group border-r border-b transition-all"
              style={{ borderColor: '#2a2a2a', backgroundColor: '#141414' }}
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              />

              {/* Discount badge */}
              {product.discount && (
                <div
                  className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: '#16a34a', color: '#fff' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {product.discount}%
                </div>
              )}

              {/* Image area */}
              <div
                className="flex items-center justify-center p-4"
                style={{ aspectRatio: '1/1', backgroundColor: '#1a1a1a' }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                  style={{ maxWidth: 120, maxHeight: 120 }}
                />
              </div>

              {/* Info */}
              <div className="p-3 pt-2">
                <p className="text-sm font-medium mb-1 truncate" style={{ color: '#e5e7eb' }}>
                  {product.name}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.oldPrice && (
                    <span className="text-xs line-through" style={{ color: '#4b5563' }}>
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="text-sm font-bold flex items-center gap-1" style={{ color: '#e5e7eb' }}>
                    {product.pricePrefix && (
                      <span className="font-normal text-xs" style={{ color: '#6b7280' }}>{product.pricePrefix}</span>
                    )}
                    {product.price}
                    <span
                      className="w-3.5 h-3.5 rounded-full inline-flex items-center justify-center text-[8px] font-bold ml-0.5"
                      style={{ backgroundColor: '#6366f1', color: '#fff' }}
                    >
                      ◆
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: '#2a2a2a', color: '#9ca3af' }}
            >
              <Icon name="X" size={16} />
            </button>

            {/* Image */}
            <div
              className="flex items-center justify-center py-10"
              style={{ backgroundColor: '#111', borderBottom: '1px solid #2a2a2a' }}
            >
              {selectedProduct.discount && (
                <div
                  className="absolute top-4 left-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: '#16a34a', color: '#fff' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
                  {selectedProduct.discount}%
                </div>
              )}
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-40 h-40 object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1" style={{ color: '#f9fafb' }}>
                {selectedProduct.name}
              </h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>
                {selectedProduct.category}
              </p>

              {/* Price row */}
              <div className="flex items-center gap-3 mb-6">
                {selectedProduct.oldPrice && (
                  <span className="text-base line-through" style={{ color: '#4b5563' }}>
                    {selectedProduct.oldPrice} ◆
                  </span>
                )}
                <span className="text-2xl font-black flex items-center gap-1.5" style={{ color: '#f9fafb' }}>
                  {selectedProduct.pricePrefix && (
                    <span className="text-sm font-normal" style={{ color: '#6b7280' }}>
                      {selectedProduct.pricePrefix}
                    </span>
                  )}
                  {selectedProduct.price * quantity}
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center text-[10px] font-bold"
                    style={{ backgroundColor: '#6366f1', color: '#fff' }}
                  >
                    ◆
                  </span>
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm" style={{ color: '#6b7280' }}>Количество:</span>
                <div
                  className="flex items-center rounded-lg overflow-hidden"
                  style={{ border: '1px solid #2a2a2a' }}
                >
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center transition-colors hover:bg-white/5"
                    style={{ color: '#9ca3af' }}
                  >
                    <Icon name="Minus" size={14} />
                  </button>
                  <span className="w-10 text-center text-sm font-bold" style={{ color: '#f9fafb' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-9 h-9 flex items-center justify-center transition-colors hover:bg-white/5"
                    style={{ color: '#9ca3af' }}
                  >
                    <Icon name="Plus" size={14} />
                  </button>
                </div>
              </div>

              {/* Buy button */}
              <button
                onClick={() => setShowSuccess(true)}
                className="w-full py-3 rounded-xl font-bold text-base transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
                style={{ backgroundColor: '#14b8a6', color: '#fff' }}
              >
                <Icon name="ShoppingCart" size={18} />
                Купить за {selectedProduct.price * quantity} ◆
              </button>

              {showSuccess && (
                <div
                  className="mt-4 p-4 rounded-xl flex items-start gap-3"
                  style={{ backgroundColor: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.3)' }}
                >
                  <Icon name="Info" size={16} className="mt-0.5 shrink-0" style={{ color: '#14b8a6' }} />
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: '#14b8a6' }}>
                      Оплата временно недоступна
                    </p>
                    <p className="text-xs" style={{ color: '#6b7280' }}>
                      Магазин скоро откроется. Следите за обновлениями в нашем Discord и Telegram.
                    </p>
                  </div>
                </div>
              )}

              {!showSuccess && (
                <p className="text-xs text-center mt-3" style={{ color: '#4b5563' }}>
                  Товар выдаётся мгновенно после оплаты
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}