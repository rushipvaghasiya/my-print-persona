import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  GraduationCap, 
  Star, 
  Briefcase, 
  Calendar,
  ExternalLink
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Print styles */}
      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .print-break-inside-avoid { break-inside: avoid; }
          .print-break-before { break-before: page; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto bg-card shadow-sm print:shadow-none print:max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-screen">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1 bg-secondary/30 p-8 print:p-6">
            {/* Header */}
            <header className="mb-8 print-break-inside-avoid">
              <h1 className="text-3xl font-bold text-primary mb-2 leading-tight">
                RHODA<br />JACKSON
              </h1>
              <div className="inline-block bg-coral text-coral-foreground px-4 py-2 rounded-full text-sm font-medium">
                Graphic Designer
              </div>
            </header>

            {/* Contact */}
            <section className="mb-8 print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-lg font-semibold text-primary">CONTACT</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-muted-foreground">rhodajackson@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-muted-foreground">(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-muted-foreground">Denver, CO</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-muted-foreground">LinkedIn</span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8 print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-lg font-semibold text-primary">EDUCATION</h2>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">B.F.A. Visual Arts</h3>
                <p className="text-coral font-medium">University of Chicago</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>2016 - 2020</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>Chicago, IL</span>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-lg font-semibold text-primary">SKILLS</h2>
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  "Adobe Photoshop",
                  "Adobe Illustrator", 
                  "Adobe After Effects",
                  "Adobe InDesign",
                  "Adobe Premiere Pro",
                  "Facebook / Instagram / TikTok",
                  "HTML / CSS",
                  "Microsoft Word / PowerPoint"
                ].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-2 p-8 print:p-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-coral" />
              </div>
              <h2 className="text-xl font-semibold text-primary">WORK EXPERIENCE</h2>
            </div>

            <div className="space-y-8">
              {/* Mozilla */}
              <article className="print-break-inside-avoid">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-primary mb-1">Graphic Designer</h3>
                  <p className="text-coral font-medium mb-2">Mozilla</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>2023 - current</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Denver, CO</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Worked with editorial, product marketing, social, and creative teams to design marketing video assets, improving ad performance by 19%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Created graphic design standards for motion graphics assets, improving brand consistency for 6 teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Integrated music, voice-over, and sound effects to enhance video content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span><strong>Designed over 120 static and video assets</strong>, nearly all included in public campaign efforts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Organized a cross-functional workshop on the importance of visual design in UI</span>
                  </li>
                </ul>
              </article>

              {/* Carta Healthcare */}
              <article className="print-break-inside-avoid">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-primary mb-1">Junior Graphic Designer</h3>
                  <p className="text-coral font-medium mb-2">Carta Healthcare</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>2021 - 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Austin, TX</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Collaborated with Marketing, PR, and Social Media teams to design graphics, boosting social engagement by 32%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Used HTML and CSS to create high-fidelity mockups for product launches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Developed original graphics for public health campaign reaching over 80,664 community members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Mentored and instructed a small team of six junior designers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Implemented A/B testing framework for ads, <strong>slashing cost per acquisition by 18%</strong></span>
                  </li>
                </ul>
              </article>

              {/* Emanate */}
              <article className="print-break-inside-avoid">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-primary mb-1">Graphic Design Intern</h3>
                  <p className="text-coral font-medium mb-2">Emanate</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>2020 - 2021</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Built concepts and designs for 17 clients using Adobe Photoshop & Illustrator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Designed elements for and edited PowerPoint presentations for CEO and 52-person company</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Produced Facebook and Instagram visual content, <strong>receiving over 1,628 points of engagement</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                    <span>Revamped company logo and business cards, boosting brand image</span>
                  </li>
                </ul>
              </article>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;