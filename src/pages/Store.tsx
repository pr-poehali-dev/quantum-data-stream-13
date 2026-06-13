import { useState } from 'react'
import Icon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface Privilege {
  id: string
  name: string
  price: number
  oldPrice?: number
  color: string
  glowColor: string
  icon: string
  badge?: string
  features: string[]
}

const privileges: Privilege[] = [
  {
    id: 'vip',
    name: 'VIP',
    price: 199,
    color: '#4ade80',
    glowColor: 'rgba(74, 222, 128, 0.3)',
    icon: 'Shield',
    features: [
      'Приоритетный вход на сервер',
      'Префикс [VIP] в чате',
      'x1.5 множитель добычи',
      '2 дома (команда /home)',
      'Телепорт к друзьям',
      'Доступ к /kit vip каждые 24ч',
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: 399,
    oldPrice: 499,
    color: '#60a5fa',
    glowColor: 'rgba(96, 165, 250, 0.3)',
    icon: 'Star',
    badge: 'Популярный',
    features: [
      'Всё из VIP',
      'Префикс [PREMIUM] в чате',
      'x2 множитель добычи',
      '5 домов (команда /home)',
      'Телепорт без задержки',
      '/kit premium каждые 12ч',
      'Автопочинка брони',
      'Скин на любое оружие',
    ],
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: 799,
    color: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    icon: 'Crown',
    badge: 'Топ',
    features: [
      'Всё из PREMIUM',
      'Префикс [ELITE] золотом',
      'x3 множитель добычи',
      '10 домов (команда /home)',
      'Мгновенный телепорт',
      '/kit elite каждые 6ч',
      'Личный магазин (/shop)',
      'Защита базы от гридинга',
      'VIP-слот навсегда',
    ],
  },
  {
    id: 'god',
    name: 'GOD',
    price: 1499,
    color: '#FF4D00',
    glowColor: 'rgba(255, 77, 0, 0.4)',
    icon: 'Flame',
    badge: 'Легенда',
    features: [
      'Всё из ELITE',
      'Префикс [GOD] с анимацией',
      'x5 множитель добычи',
      'Неограниченные дома',
      '/fly — полёт на сервере',
      '/kit god каждые 3ч',
      'Команда /heal',
      'Невидимость (/vanish)',
      'Никнейм любого цвета',
      'Персональная команда /tpa',
    ],
  },
]

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Магазин', href: '/store', active: true },
  { label: 'Правила', href: '#' },
  { label: 'Discord', href: '#' },
]

export default function Store() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0500', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: 'rgba(10, 5, 0, 0.95)',
          borderColor: '#2a1a0a',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded flex items-center justify-center"
              style={{ backgroundColor: '#FF4D00' }}
            >
              <Icon name="Flame" size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-widest uppercase" style={{ color: '#FF4D00' }}>
              RUST<span className="text-white">SERVER</span>
            </span>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded text-sm font-medium transition-colors"
                style={{
                  color: link.active ? '#FF4D00' : '#9ca3af',
                  backgroundColor: link.active ? 'rgba(255, 77, 0, 0.1)' : 'transparent',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium"
              style={{ backgroundColor: 'rgba(74, 222, 128, 0.1)', color: '#4ade80' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Онлайн: 142 / 200
            </div>
            <Button
              size="sm"
              className="font-bold uppercase tracking-wider"
              style={{ backgroundColor: '#FF4D00', color: '#fff', border: 'none' }}
            >
              Подключиться
            </Button>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      <div
        className="relative py-16 px-6 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(255,77,0,0.12) 0%, rgba(10,5,0,0) 100%)',
          borderBottom: '1px solid #2a1a0a',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,77,0,0.15) 0%, transparent 70%)'
        }} />
        <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#FF4D00' }}>
          Официальный магазин привилегий
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
          Стань <span style={{ color: '#FF4D00' }}>сильнейшим</span>
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: '#6b7280' }}>
          Привилегии не дают преимущества в бою — они дают комфорт и статус. Честная игра гарантирована.
        </p>
      </div>

      {/* CARDS */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {privileges.map((priv) => (
            <div
              key={priv.id}
              onClick={() => setSelected(priv.id === selected ? null : priv.id)}
              className="relative rounded-xl cursor-pointer transition-all duration-300 flex flex-col"
              style={{
                backgroundColor: '#120c04',
                border: `1px solid ${selected === priv.id ? priv.color : '#2a1a0a'}`,
                boxShadow: selected === priv.id ? `0 0 30px ${priv.glowColor}` : 'none',
                transform: selected === priv.id ? 'translateY(-4px)' : 'none',
              }}
            >
              {/* Badge */}
              {priv.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: priv.color, color: '#000' }}
                >
                  {priv.badge}
                </div>
              )}

              {/* Top */}
              <div className="p-6 pb-4 flex flex-col items-center text-center border-b" style={{ borderColor: '#2a1a0a' }}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${priv.color}22`, boxShadow: `0 0 20px ${priv.glowColor}` }}
                >
                  <Icon name={priv.icon} size={26} style={{ color: priv.color }} />
                </div>
                <h3
                  className="text-2xl font-black tracking-widest uppercase mb-3"
                  style={{ color: priv.color }}
                >
                  {priv.name}
                </h3>
                <div className="flex items-baseline gap-2 justify-center">
                  {priv.oldPrice && (
                    <span className="text-sm line-through" style={{ color: '#4b5563' }}>
                      {priv.oldPrice} ₽
                    </span>
                  )}
                  <span className="text-3xl font-black" style={{ color: '#fff' }}>
                    {priv.price} ₽
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-2.5 flex-1">
                  {priv.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#d1d5db' }}>
                      <Icon name="Check" size={14} className="mt-0.5 shrink-0" style={{ color: priv.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-6 w-full py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-200"
                  style={{
                    backgroundColor: selected === priv.id ? priv.color : 'transparent',
                    color: selected === priv.id ? '#000' : priv.color,
                    border: `2px solid ${priv.color}`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = priv.color
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#000'
                  }}
                  onMouseLeave={e => {
                    if (selected !== priv.id) {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                      ;(e.currentTarget as HTMLButtonElement).style.color = priv.color
                    }
                  }}
                >
                  Купить {priv.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* INFO STRIP */}
        <div
          className="mt-12 rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          style={{ backgroundColor: '#120c04', border: '1px solid #2a1a0a' }}
        >
          {[
            { icon: 'Zap', label: 'Мгновенная выдача', desc: 'Привилегия активируется сразу после оплаты', color: '#f59e0b' },
            { icon: 'RefreshCw', label: 'Сохраняется после вайпа', desc: 'Привилегия не сгорает при обнулении сервера', color: '#60a5fa' },
            { icon: 'HeadphonesIcon', label: 'Поддержка 24/7', desc: 'Помогаем в Discord в любое время суток', color: '#4ade80' },
          ].map((item) => (
            <div key={item.icon} className="flex flex-col items-center gap-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                style={{ backgroundColor: `${item.color}22` }}
              >
                <Icon name={item.icon} size={18} style={{ color: item.color }} />
              </div>
              <p className="font-semibold text-sm text-white">{item.label}</p>
              <p className="text-xs" style={{ color: '#6b7280' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t mt-8 py-8 text-center text-xs" style={{ borderColor: '#2a1a0a', color: '#4b5563' }}>
        © 2024 RUST SERVER — Все права защищены. Привилегии не влияют на баланс игры.
      </footer>
    </div>
  )
}