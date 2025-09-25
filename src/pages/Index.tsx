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
          * { 
            -webkit-print-color-adjust: exact; 
            color-adjust: exact; 
          }
          @page {
            size: 8.5in 11in;
            margin: 0.5in;
          }
          .print-container { 
            max-width: none !important; 
            margin: 0 !important; 
            padding: 0 !important;
            box-shadow: none !important;
          }
          .print-grid { 
            grid-template-columns: 1fr 2fr !important; 
          }
          .print-sidebar { 
            padding: 0.25in !important;
          }
          .print-main { 
            padding: 0.25in !important;
          }
          .print-break-inside-avoid { break-inside: avoid; }
          .no-print { display: none !important; }
          
          /* Hide Lovable watermark and other elements */
          iframe, .lovable-badge, [data-testid="lovable-badge"] { display: none !important; }
          header:has([href*="lovable"]) { display: none !important; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto bg-card shadow-sm print:shadow-none print:max-w-none print-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-screen">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1 bg-secondary/30 p-8">
            {/* Header */}
            <header className="mb-8 break-inside-avoid">
              <h1 className="text-3xl font-bold text-primary mb-4 leading-tight">
                RHODA<br />JACKSON
              </h1>
            </header>

            {/* Summary */}
            <section className="mb-8 break-inside-avoid">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-lg font-semibold text-primary">SUMMARY</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Creative graphic designer with 4+ years of experience in digital marketing, motion graphics, and brand development. Proven track record of improving campaign performance and leading cross-functional design initiatives at leading technology companies.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8 break-inside-avoid">
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
            <section className="mb-8 break-inside-avoid">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-lg font-semibold text-primary">EDUCATION</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary text-sm">B.F.A. Visual Arts</h3>
                  <p className="text-coral font-medium text-sm">University of Chicago</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>2016 - 2020</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>Chicago, IL</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm">Certificate in Digital Marketing</h3>
                  <p className="text-coral font-medium text-sm">Google Digital Academy</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>2021</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>Online</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="break-inside-avoid">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-lg font-semibold text-primary">SKILLS</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-primary font-semibold text-xs mb-2">Design Software</h3>
                  <p className="text-xs text-muted-foreground">Adobe Photoshop, Illustrator, After Effects, InDesign, Premiere Pro</p>
                </div>
                <div>
                  <h3 className="text-primary font-semibold text-xs mb-2">Programming Languages</h3>
                  <p className="text-xs text-muted-foreground">HTML, CSS, JavaScript</p>
                </div>
                <div>
                  <h3 className="text-primary font-semibold text-xs mb-2">Social Media Platforms</h3>
                  <p className="text-xs text-muted-foreground">Facebook, Instagram, TikTok</p>
                </div>
                <div>
                  <h3 className="text-primary font-semibold text-xs mb-2">Office Suite</h3>
                  <p className="text-xs text-muted-foreground">Microsoft Word, PowerPoint, Excel</p>
                </div>
              </div>
            </section>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-2 p-8">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-coral" />
              </div>
              <h2 className="text-xl font-semibold text-primary">WORK EXPERIENCE</h2>
            </div>

            <div className="space-y-8">
              {/* Mozilla */}
              <article className="break-inside-avoid">
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
                    <span><strong>Designed over 120 static and video assets</strong>, nearly all included in public campaign efforts</span>
                  </li>
                </ul>
              </article>

              {/* Carta Healthcare */}
              <article className="break-inside-avoid">
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
                    <span><strong>Implemented A/B testing framework for ads, slashing cost per acquisition by 18%</strong></span>
                  </li>
                </ul>
              </article>
            </div>

            {/* Projects Section */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-xl font-semibold text-primary">PROJECTS</h2>
              </div>

              <div className="space-y-6">
                {/* Project 1 */}
                <article className="break-inside-avoid">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-primary mb-1">Brand Identity Redesign</h3>
                    <p className="text-coral font-medium mb-2">Healthcare Startup Rebranding</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                      <span>Led complete visual identity overhaul for emerging healthcare technology company</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                      <span>Created cohesive brand guidelines, logo system, and marketing collateral</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                      <span><strong>Resulted in 45% increase in brand recognition</strong> and improved investor engagement</span>
                    </li>
                  </ul>
                </article>

                {/* Project 2 */}
                <article className="break-inside-avoid">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-primary mb-1">Interactive Dashboard Design</h3>
                    <p className="text-coral font-medium mb-2">Data Visualization Platform</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                      <span>Designed user-friendly interface for complex data analytics platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                      <span>Created intuitive navigation and data visualization components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2"></div>
                      <span><strong>Improved user task completion rate by 60%</strong> and reduced training time</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;