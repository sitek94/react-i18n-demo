import * as React from 'react'

interface Props {
  children: React.ReactNode
}

export function Header({ children }: Props) {
  return <header className="container">{children}</header>
}

export function Navbar({ children }: Props) {
  return (
    <nav>
      <div className="container">{children}</div>
    </nav>
  )
}

export function Main({ children }: Props) {
  return <main className="container">{children}</main>
}

export function Section({
  title,
  children,
}: {
  title: string
} & Props) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
