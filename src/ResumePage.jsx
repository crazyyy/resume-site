// resume-site/src/ResumePage.jsx
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

export default function ResumePage({ content }) {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">{content.title}</h1>
      <p className="text-lg">{content.subtitle}</p>

      <section>
        <h2 className="text-2xl font-semibold mb-2">📌 {content.aboutTitle || "Про мене"}</h2>
        <p>{content.about}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">💼 {content.experience}</h2>
        <ul className="space-y-4">
          <li>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">Full-Stack Web Developer — Фриланс</h3>
                <p className="text-sm text-muted-foreground">09.2007 — теперішній час, Вінниця</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Кастомна розробка WordPress, Laravel, Node.js</li>
                  <li>REST API для мобільних застосунків</li>
                  <li>CI/CD, AWS, Heroku, Docker, GitHub Actions</li>
                </ul>
              </CardContent>
            </Card>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🛠️ {content.skills}</h2>
        <div className="flex flex-wrap gap-2">
          {["PHP", "Laravel", "Node.js", "React", "Vue", "Docker", "CI/CD", "SEO", "MySQL", "AWS"].map(skill => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">📄 {content.certs}</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Coursera — Google AI Essentials</li>
          <li>ITVDN — React Advanced</li>
          <li>Prometheus — AI</li>
          <li>Netpeak — Робота з текстовими ШІ</li>
          <li>Coursera — ІТ-безпека</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🔗 {content.portfolio}</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li><a href="https://github.com/vitaliantoniuk" className="text-blue-600">GitHub</a></li>
          <li><a href="https://antoniuk.pp.ua" className="text-blue-600">Персональний сайт</a></li>
          <li><a href="https://linkedin.com/in/vitaliantoniuk" className="text-blue-600">LinkedIn</a></li>
        </ul>
      </section>
    </div>
  );
}
