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
            box-sizing: border-box;
          }
          @page {
            size: 8.5in 11in;
            margin: 0.5in;
          }
          body { 
            margin: 0; 
            padding: 0; 
            font-size: 10px; 
            line-height: 1.2; 
            color: #000 !important;
            background: white !important;
          }
          .print-container { 
            max-width: none !important; 
            margin: 0 !important; 
            padding: 0 !important;
            min-height: auto !important;
            height: auto !important;
            background: white !important;
            box-shadow: none !important;
          }
          .print-grid { 
            display: grid !important; 
            grid-template-columns: 2.4in 5.1in !important; 
            gap: 0 !important;
            height: auto !important;
            min-height: auto !important;
          }
          .print-sidebar { 
            padding: 0.2in !important; 
            font-size: 9px !important;
            background: #f8f9fa !important;
          }
          .print-main { 
            padding: 0.2in !important; 
            font-size: 9px !important;
            background: white !important;
          }
          .print-name { 
            font-size: 18px !important; 
            line-height: 1 !important; 
            margin-bottom: 6px !important; 
            color: #000 !important;
          }
          .print-section { 
            margin-bottom: 12px !important; 
          }
          .print-section-header { 
            font-size: 10px !important; 
            margin-bottom: 6px !important; 
            color: #000 !important;
            font-weight: 600 !important;
          }
          .print-job { 
            margin-bottom: 10px !important; 
          }
          .print-job-title { 
            font-size: 11px !important; 
            margin-bottom: 1px !important; 
            color: #000 !important;
          }
          .print-company { 
            font-size: 9px !important; 
            margin-bottom: 2px !important; 
            color: #666 !important;
          }
          .print-job-details { 
            font-size: 8px !important; 
            margin-bottom: 4px !important; 
            color: #666 !important;
          }
          .print-bullet { 
            font-size: 8px !important; 
            line-height: 1.1 !important; 
            margin-bottom: 2px !important; 
            color: #333 !important;
          }
          .print-skill { 
            font-size: 8px !important; 
            line-height: 1.2 !important; 
            margin-bottom: 1px !important; 
            color: #333 !important;
          }
          .print-contact { 
            font-size: 8px !important; 
            margin-bottom: 3px !important; 
            color: #333 !important;
          }
          .print-summary { 
            font-size: 9px !important; 
            line-height: 1.2 !important; 
            margin-bottom: 10px !important; 
            color: #333 !important;
          }
          .print-education-item { 
            margin-bottom: 8px !important; 
          }
          .print-skill-category { 
            margin-bottom: 6px !important; 
          }
          .print-skill-title { 
            font-size: 9px !important; 
            font-weight: 600 !important; 
            margin-bottom: 2px !important; 
            color: #000 !important;
          }
          .print-break-inside-avoid { break-inside: avoid; }
          .print-break-before { break-before: page; }
          .no-print { display: none !important; }
          .print-hide { display: none !important; }
          
          /* Hide Lovable watermark and other elements */
          iframe, .lovable-badge, [data-testid="lovable-badge"] { display: none !important; }
          header:has([href*="lovable"]) { display: none !important; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto bg-card shadow-sm print:shadow-none print:max-w-none print-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-screen print-grid">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1 bg-secondary/30 p-8 print-sidebar">
            {/* Header */}
            <header className="mb-8 print-section print-break-inside-avoid">
              <h1 className="text-3xl font-bold text-primary mb-4 leading-tight print-name">
                RHODA<br />JACKSON
              </h1>
            </header>

            {/* Summary */}
            <section className="mb-8 print-section print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center print-hide">
                  <Star className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-lg font-semibold text-primary print-section-header">SUMMARY</h2>
              </div>
              <p className="text-sm text-muted-foreground print-summary">
                Creative graphic designer with 4+ years of experience in digital marketing, motion graphics, and brand development. Proven track record of improving campaign performance and leading cross-functional design initiatives at leading technology companies.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8 print-section print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center print-hide">
                  <Mail className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-lg font-semibold text-primary print-section-header">CONTACT</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 print-contact">
                  <Mail className="w-4 h-4 text-coral flex-shrink-0 print-hide" />
                  <span className="text-muted-foreground">rhodajackson@email.com</span>
                </div>
                <div className="flex items-center gap-3 print-contact">
                  <Phone className="w-4 h-4 text-coral flex-shrink-0 print-hide" />
                  <span className="text-muted-foreground">(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-3 print-contact">
                  <MapPin className="w-4 h-4 text-coral flex-shrink-0 print-hide" />
                  <span className="text-muted-foreground">Denver, CO</span>
                </div>
                <div className="flex items-center gap-3 print-contact">
                  <Linkedin className="w-4 h-4 text-coral flex-shrink-0 print-hide" />
                  <span className="text-muted-foreground">LinkedIn</span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8 print-section print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center print-hide">
                  <GraduationCap className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-lg font-semibold text-primary print-section-header">EDUCATION</h2>
              </div>
              <div className="space-y-4">
                <div className="print-education-item">
                  <h3 className="font-semibold text-primary text-sm">B.F.A. Visual Arts</h3>
                  <p className="text-coral font-medium text-sm">University of Chicago</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 print-hide" />
                    <span>2016 - 2020</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 print-hide" />
                    <span>Chicago, IL</span>
                  </div>
                </div>
                <div className="print-education-item">
                  <h3 className="font-semibold text-primary text-sm">Certificate in Digital Marketing</h3>
                  <p className="text-coral font-medium text-sm">Google Digital Academy</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 print-hide" />
                    <span>2021</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 print-hide" />
                    <span>Online</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="print-section print-break-inside-avoid">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center print-hide">
                  <Star className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-lg font-semibold text-primary print-section-header">SKILLS</h2>
              </div>
              <div className="space-y-4">
                <div className="print-skill-category">
                  <h3 className="print-skill-title text-primary font-semibold text-xs mb-2">Design Software</h3>
                  <p className="text-xs text-muted-foreground print-skill">Adobe Photoshop, Illustrator, After Effects, InDesign, Premiere Pro</p>
                </div>
                <div className="print-skill-category">
                  <h3 className="print-skill-title text-primary font-semibold text-xs mb-2">Programming Languages</h3>
                  <p className="text-xs text-muted-foreground print-skill">HTML, CSS, JavaScript</p>
                </div>
                <div className="print-skill-category">
                  <h3 className="print-skill-title text-primary font-semibold text-xs mb-2">Social Media Platforms</h3>
                  <p className="text-xs text-muted-foreground print-skill">Facebook, Instagram, TikTok</p>
                </div>
                <div className="print-skill-category">
                  <h3 className="print-skill-title text-primary font-semibold text-xs mb-2">Office Suite</h3>
                  <p className="text-xs text-muted-foreground print-skill">Microsoft Word, PowerPoint, Excel</p>
                </div>
              </div>
            </section>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-2 p-8 print-main">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center print-hide">
                <Briefcase className="w-4 h-4 text-coral" />
              </div>
              <h2 className="text-xl font-semibold text-primary print-section-header">WORK EXPERIENCE</h2>
            </div>

            <div className="space-y-8">
              {/* Mozilla */}
              <article className="print-job print-break-inside-avoid">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-primary mb-1 print-job-title">Graphic Designer</h3>
                  <p className="text-coral font-medium mb-2 print-company">Mozilla</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 print-job-details">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 print-hide" />
                      <span>2023 - current</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 print-hide" />
                      <span>Denver, CO</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2 print-bullet">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                    <span>Worked with editorial, product marketing, social, and creative teams to design marketing video assets, improving ad performance by 19%</span>
                  </li>
                  <li className="flex items-start gap-2 print-bullet">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                    <span>Created graphic design standards for motion graphics assets, improving brand consistency for 6 teams</span>
                  </li>
                  <li className="flex items-start gap-2 print-bullet">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                    <span><strong>Designed over 120 static and video assets</strong>, nearly all included in public campaign efforts</span>
                  </li>
                </ul>
              </article>

              {/* Carta Healthcare */}
              <article className="print-job print-break-inside-avoid">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-primary mb-1 print-job-title">Junior Graphic Designer</h3>
                  <p className="text-coral font-medium mb-2 print-company">Carta Healthcare</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 print-job-details">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 print-hide" />
                      <span>2021 - 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 print-hide" />
                      <span>Austin, TX</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2 print-bullet">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                    <span>Collaborated with Marketing, PR, and Social Media teams to design graphics, boosting social engagement by 32%</span>
                  </li>
                  <li className="flex items-start gap-2 print-bullet">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                    <span>Used HTML and CSS to create high-fidelity mockups for product launches</span>
                  </li>
                  <li className="flex items-start gap-2 print-bullet">
                    <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                    <span><strong>Implemented A/B testing framework for ads, slashing cost per acquisition by 18%</strong></span>
                  </li>
                </ul>
              </article>
            </div>

            {/* Projects Section */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center print-hide">
                  <ExternalLink className="w-4 h-4 text-coral" />
                </div>
                <h2 className="text-xl font-semibold text-primary print-section-header">PROJECTS</h2>
              </div>

              <div className="space-y-6">
                {/* Project 1 */}
                <article className="print-job print-break-inside-avoid">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-primary mb-1 print-job-title">Brand Identity Redesign</h3>
                    <p className="text-coral font-medium mb-2 print-company">Healthcare Startup Rebranding</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2 print-bullet">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                      <span>Led complete visual identity overhaul for emerging healthcare technology company</span>
                    </li>
                    <li className="flex items-start gap-2 print-bullet">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                      <span>Created cohesive brand guidelines, logo system, and marketing collateral</span>
                    </li>
                    <li className="flex items-start gap-2 print-bullet">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                      <span><strong>Resulted in 45% increase in brand recognition</strong> and improved investor engagement</span>
                    </li>
                  </ul>
                </article>

                {/* Project 2 */}
                <article className="print-job print-break-inside-avoid">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-primary mb-1 print-job-title">Interactive Dashboard Design</h3>
                    <p className="text-coral font-medium mb-2 print-company">Data Visualization Platform</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2 print-bullet">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                      <span>Designed user-friendly interface for complex data analytics platform</span>
                    </li>
                    <li className="flex items-start gap-2 print-bullet">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
                      <span>Created intuitive navigation and data visualization components</span>
                    </li>
                    <li className="flex items-start gap-2 print-bullet">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0 mt-2 print-hide"></div>
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