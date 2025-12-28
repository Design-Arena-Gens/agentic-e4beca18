import { CopyButton } from "@/components/CopyButton";
import { stanzas } from "@/lib/poem";

export default function Home() {
  const poemText = stanzas
    .map((stanza) => `${stanza.title}\n${stanza.lines.join("\n")}`)
    .join("\n\n");

  return (
    <div className="aurora relative flex min-h-screen w-full items-center justify-center px-6 py-12">
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 px-8 pb-16 pt-12 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:px-14 lg:px-20">
        <header className="flex flex-col gap-6 text-center sm:text-left">
          <span className="inline-flex w-fit items-center gap-2 self-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur sm:self-start">
            नई उमंग की सरगोशी
          </span>
          <h1 className="text-4xl font-semibold leading-[1.2] text-white drop-shadow lg:text-5xl">
            रूहानी शायरी गीत
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            यह गीत प्रेम, प्रतीक्षा और जश्न की परतों से बुनी हुई शायरी है।
            हर बंद उस पल की याद है जब दिल ने ख़ामोशी से इज़हार किया और उम्मीद का
            चिराग़ नई सुबह का वादा लेकर आया।
          </p>
          <div className="flex flex-col items-center gap-4 text-sm text-white/70 sm:flex-row sm:justify-between">
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              <span className="rounded-full border border-white/20 px-4 py-1">
                शैली: आधुनिक ग़ज़लनुमा शायरी
              </span>
              <span className="rounded-full border border-white/20 px-4 py-1">
                भाव: प्रेम, उम्मीद, उल्लास
              </span>
            </div>
            <CopyButton text={poemText} />
          </div>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {stanzas.map((stanza) => (
            <article
              key={stanza.id}
              className="group relative flex h-full flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-lg shadow-rose-500/10 transition hover:border-white/30 hover:shadow-rose-500/20"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition group-hover:opacity-80" />
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                <span>बंद {stanza.id.toString().padStart(2, "0")}</span>
                <span>
                  {stanza.mood === "hope"
                    ? "उम्मीद"
                    : stanza.mood === "yearn"
                      ? "तड़प"
                      : "उल्लास"}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-white drop-shadow">
                {stanza.title}
              </h2>
              {stanza.highlight && (
                <p className="text-sm font-medium text-amber-200/80">
                  {stanza.highlight}
                </p>
              )}
              <div className="flex flex-col gap-1.5 text-lg leading-relaxed text-white/80">
                {stanza.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-sm text-white/70 sm:text-left">
          <p>
            यह शायरी स्नेह और रोशनी की सूक्ष्म लहरों को सलाम करती है। जब भी दिल
            किसी अपनापन की तलाश में थक जाए, तो इन पंक्तियों को पढ़कर मुस्कुराने
            की वजह याद कर लें।
          </p>
        </footer>
      </main>
    </div>
  );
}
