import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import { PageTransition } from '../components/PageTransition';

const CURRENT_BOOK = {
  title: "Sapiens",
  author: "Yuval Noah Harari",
  genre: "Anthropology / Non-Fiction",
  description: "A brilliant sweep through human evolution, exploring how shared myths and collective imagination allowed Homo Sapiens to dominate the planet and build the complex systems we live in today"
};

const ARCHIVE = [
  {
    category: "Sport / Memoir",
    books: [
      { title: "Open", author: "André Agassi", year: "2024" },
      { title: "Shoe Dog", author: "Phil Knight", year: "2024" },
      { title: "Can't Hurt Me", author: "David Goggins", year: "2025" },
      { title: "What I Talk About When I Talk About Running", author: "Haruki Murakami", year: "2025" }
    ]
  },
  {
    category: "Classics / Dystopia",
    books: [
      { title: "1984", author: "George Orwell", year: "2024" },
      { title: "Fahrenheit 451", author: "Ray Bradbury", year: "2024" },
      { title: "Animal Farm", author: "George Orwell", year: "2026" },
      { title: "The Old Man and the Sea", author: "Ernest Hemingway", year: "2025" },
      { title: "The Odyssey", author: "Homer", year: "2025" },
      { title: "Oedipus Rex, Oedipus at Colonus, Antigone", author: "Sophocles", year: "2025" }
    ]
  },
  {
    category: "Science / Biography",
    books: [
      { title: "Elon Musk", author: "Ashlee Vance", year: "2024" },
      { title: "Einstein", author: "Walter Isaacson", year: "2026" },
      { title: "Irriducibile", author: "Federico Faggin", year: "2025" },
      { title: "Valeva la pena tentare", author: "Pier Luigi Pisa", year: "2025" },
      { title: "Flatland", author: "Edwin Abbott Abbott", year: "2024" }
    ]
  },
  {
    category: "Psychology / Philosophy",
    books: [
      { title: "The Anxious Generation", author: "Jonathan Haidt", year: "2025" },
      { title: "The Righteous Mind", author: "Jonathan Haidt", year: "2025" },
      { title: "The Power of Habit", author: "Charles Duhigg", year: "2024" },
      { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", year: "2024" },
      { title: "Siddhartha", author: "Hermann Hesse", year: "2026" },
      { title: "The Alchemist", author: "Paulo Coelho", year: "2025" }
    ]
  },
  {
    category: "Fiction",
    books: [
      { title: "Norwegian Wood", author: "Haruki Murakami", year: "2025" },
      { title: "Kafka on the Shore", author: "Haruki Murakami", year: "2025" }
    ]
  }
];

export default function ReadingArchive() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 text-obsidian min-h-[100dvh]">
        <main className="px-4 md:px-12 lg:px-24 max-w-4xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Link to="/life" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-emerald-500 transition-colors mb-8 group">
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Life</span>
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-obsidian">
              Reading <span className="text-emerald-500">Archive.</span>
            </h1>
            <p className="text-lg text-slate-600">
              A record of what I'm reading, from non-fiction to classics..
            </p>
          </motion.div>

          {/* Current Read Highlight */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-24"
          >
            <h2 className="text-xs font-mono text-emerald-600 uppercase tracking-widest mb-6">Currently Reading</h2>
            <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-[2rem] shadow-sm">
              <div className="flex flex-col items-start gap-4">
                <span className="font-mono text-[10px] text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-500/10">
                  [{CURRENT_BOOK.genre}]
                </span>
                <h3 className="text-3xl font-bold text-obsidian">{CURRENT_BOOK.title}</h3>
                <p className="text-lg text-slate-500 font-medium">{CURRENT_BOOK.author}</p>
                <p className="text-slate-600 leading-relaxed mt-2 max-w-2xl">{CURRENT_BOOK.description}</p>
              </div>
            </div>
          </motion.section>

          {/* The Grid */}
          <section>
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-12 border-b border-slate-200 pb-2">The Grid</h2>

            <div className="flex flex-col gap-16">
              {ARCHIVE.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-xl font-bold text-obsidian">{section.category}</h3>
                    <div className="h-px bg-slate-200 flex-grow"></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {section.books.map((book, bIdx) => (
                      <div
                        key={bIdx}
                        className="group flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-slate-100 last:border-0 cursor-default"
                      >
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 transition-transform duration-300 group-hover:translate-x-[2px]">
                          <h4 className="text-lg font-bold text-obsidian">{book.title}</h4>
                          <div className="flex items-baseline gap-3">
                            <span className="text-sm text-slate-500">{book.author}</span>
                            <span className="font-mono text-[9px] text-slate-400 opacity-50 tracking-widest">{book.year}</span>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-slate-400 mt-2 md:mt-0 transition-colors duration-300 group-hover:text-emerald-500 uppercase tracking-widest">
                          [{section.category}]
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
