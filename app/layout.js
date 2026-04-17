import "./globals.css";

export const metadata = {
  title: "BRUTUS — Мужская стрижка с характером",
  description: "Барбершоп BRUTUS: классические мужские стрижки, моделирование бороды, бритьё опасной бритвой.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
