import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Globe, Shield, Sparkles } from "lucide-react";
import { IconCircle } from "@/components/IconCircle";
import { DiagonalDivider } from "@/components/DiagonalDivider";
import SEO, { getOrganizationSchema } from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Bespoke AI Training Data Licensing"
        description="Rights-cleared, audit-ready, globally diverse AI training data. We curate datasets deal-by-deal with European governance standards and white-glove service."
        keywords="AI training data, content licensing, video licensing, audio licensing, AI datasets, machine learning data, rights-cleared content, European AI governance"
        structuredData={getOrganizationSchema()}
      />
      {/* Hero Section - Dark, Dramatic, Asymmetric */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#5D1681] via-[#8B2A9B] to-[#5D1681] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031433820/eyzfqPatXBUDtYOz.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium border border-secondary/30 text-secondary mb-8">
              20+ Years in Content Licensing
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              The AI training data market is entering its <span className="text-gradient-light">second wave</span>.
            </h1>
            
            <div className="space-y-4 mb-10">
              <p className="text-2xl md:text-3xl font-semibold text-white/90 leading-relaxed max-w-3xl">
                Quality. Provenance. Genuine content diversity.
              </p>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
                Content Aimbassy curates and brokers rights-cleared audiovisual and audio content from broadcasters, archives, and producers worldwide — sourced for major AI and technology buyers as training data. European-headquartered. Institutionally sourced. Built for what the market now requires.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/for-ai-companies">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-10 py-7 rounded-md group shadow-lg"
                >
                  I'm an AI buyer
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/for-content-owners">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-7 rounded-md backdrop-blur-sm"
                >
                  I'm a content owner
                </Button>
              </Link>
            </div>

            <p className="text-sm text-white/60 pt-6">
              A service by <strong className="text-white/90">Global Media Consult</strong>
            </p>
          </div>
        </div>
      </section>

      <DiagonalDivider direction="left" className="text-white" />

      {/* What Content Aimbassy Is */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium border border-secondary/30 text-secondary mb-8 uppercase tracking-wider">
              What Content Aimbassy Is
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are not a volume data platform. We are a specialist curator and aggregator — selecting for quality, rights integrity, and genuine content diversity across languages, geographies, and genres. We work with broadcasters, public media archives, independent producers, and rights holders on every continent.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed font-semibold">
                The distinction matters to buyers. It should matter to you, too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Work<br />
              <span className="text-gradient-primary">With Us</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
              We operate as a bespoke atelier, not a platform. Every deal is handled individually, with human judgment, cultural awareness, and a commitment to making AI more representative.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-secondary">
                <div className="flex items-start gap-4 mb-4">
                  <IconCircle icon={Globe} color="coral" size="md" />
                  <h3 className="text-xl font-bold mt-3">International depth, not Anglo-American volume</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our catalogue and supplier network spans Europe, Asia, Latin America, Africa, and beyond. The underrepresentation of non-English content in AI training data is a known gap — and a structural opportunity for rights holders whose content sits outside the mainstream.
                </p>
              </Card>
              <Card className="p-8 border-l-4 border-l-secondary">
                <div className="flex items-start gap-4 mb-4">
                  <IconCircle icon={Shield} color="peach" size="md" />
                  <h3 className="text-xl font-bold mt-3">European headquarters as a compliance asset</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Registered in Germany. Operating under EU law. For buyers who need provenance-documented, rights-clear content that satisfies emerging regulatory requirements — including the EU AI Act — our European base is a feature, not a footnote.
                </p>
              </Card>
              <Card className="p-8 border-l-4 border-l-secondary">
                <div className="flex items-start gap-4 mb-4">
                  <IconCircle icon={Sparkles} color="lavender" size="md" />
                  <h3 className="text-xl font-bold mt-3">Curation over aggregation</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We reject more than we accept. Content that enters our pipeline has been assessed for rights clarity, technical quality, and buyer fit. This protects our buyers and protects the value of your catalogue.
                </p>
              </Card>
              <Card className="p-8 border-l-4 border-l-secondary">
                <div className="flex items-start gap-4 mb-4">
                  <IconCircle icon={Users} color="mint" size="md" />
                  <h3 className="text-xl font-bold mt-3">Direct buyer relationships</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We negotiate directly with AI and technology buyers — not through layers of intermediaries. This means faster deal cycles, cleaner terms, and a single point of accountability for rights holders.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who We<br />
              <span className="text-gradient-primary">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              We work with both sides of the market. AI companies seeking training data. Content owners monetizing their libraries.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-10 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-primary">For AI Companies</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Multimodal, LLM, ASR, speech, and vision models. Data procurement teams. Research leads. Public-sector and sovereign AI initiatives.
                </p>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Speech recognition and synthesis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Face mapping and computer vision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Motion analysis and action recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Language model training (rare languages)</span>
                  </li>
                </ul>
                <Link href="/for-ai-companies">
                  <Button className="w-full text-lg py-6" size="lg">
                    Explore Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-10 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-primary">For Content Owners</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Broadcasters, production studios, audio aggregators, niche and international content libraries seeking new revenue streams.
                </p>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Global reach to leading AI companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Rights management and legal compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Fair compensation, deal-by-deal flexibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Minimum 100 hours, professional quality</span>
                  </li>
                </ul>
                <Link href="/for-content-owners">
                  <Button className="w-full text-lg py-6" size="lg">
                    Submit Your Content <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider direction="right" className="text-white" />


      {/* The Market Moment - Why Now */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium border border-secondary/30 text-secondary mb-8 uppercase tracking-wider">
              The Market Moment
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The first wave is commoditising. The <span className="text-gradient-primary">second wave has begun</span>.
            </h2>
            
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                The AI training data market's first wave was defined by high volume, Anglo-American content, and aggregator-driven supply. That market is now maturing — supply is rising, rates are adjusting, and the differentiation window for generic volume content is closing.
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                The second wave is defined by three things AI buyers increasingly require and cannot easily find:
              </p>
              
              <div className="space-y-4 pl-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  • Provenance documentation — rights chains that are auditable and defensible
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  • Regulatory compliance — particularly relevant under the EU AI Act for non-Anglo-American content
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  • Genuine content diversity — language, geography, genre, and cultural representation beyond the English-speaking world
                </p>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl font-semibold">
                Content Aimbassy was built for this wave. Our European headquarters is a compliance asset, not a geographic limitation. Our catalogue reaches well beyond Europe — spanning Asia, Latin America, Africa, and the Pacific.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider direction="left" className="text-white" />


      {/* Why We're Different */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We<br />
              <span className="text-gradient-primary">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
              We operate as stewards, not brokers. Every engagement begins with conversation, proceeds through careful curation, and results in defensible, ethically sourced training data.
            </p>
            
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Conversation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We begin by understanding your needs. What are you building? What cultural, linguistic, or technical characteristics matter? For content owners: what do you steward, and what rights can you clear? This is a consultation, not a transaction.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Curation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We curate datasets tailored to your model, geography, and risk profile. This is human judgment—not algorithmic matching. We know the content, the creators, and the cultural context.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Stewardship</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Rights verification, licensing negotiations, legal compliance—we handle it with care. You receive defensible data with complete provenance, audit-ready documentation, and respect for creators built in.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Delivery</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fast sample → contract → delivery pipeline. Secure S3-WEST infrastructure. Full datasets delivered on agreed timelines with complete metadata and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Steward */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031433820/knTfXDJGCttulzlM.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We<br />
              <span className="text-gradient-primary">Steward</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
              A large, fast-growing independent portfolio—curated deal-by-deal. These are examples of the content we steward, not a catalogue to browse.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <h4 className="font-bold mb-3 text-xl text-primary">Rare Languages Audio Collection</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  One of the largest curated audio portfolios of rare and underrepresented languages. Ideal for speech recognition, linguistic diversity, and accent training.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Extensive archive • 70+ languages • Curated by linguistic experts
                </p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <h4 className="font-bold mb-3 text-xl text-primary">News & Interview Archive for Face Mapping</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Extensive international news and interview content across 40+ languages. Ideal for face mapping, emotion recognition, and diverse facial features.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  International coverage • Diverse demographics • Rights-cleared
                </p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <h4 className="font-bold mb-3 text-xl text-primary">Sports & High-Motion Content</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Specialized sports footage from leading suppliers (clearance required for samples). Ideal for motion analysis, action recognition, and athletic movement.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Specialized suppliers • High-quality capture • NDA required
                </p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <h4 className="font-bold mb-3 text-xl text-primary">Instructional & Documentary Library</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Curated selection from 30+ independent producers. Ideal for educational AI, procedural learning, and specialized knowledge domains.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  30+ producers • Specialized topics • Curated for quality
                </p>
              </Card>
            </div>

            {/* What You're Really Buying */}
            <div className="bg-white rounded-lg p-10 shadow-sm border-l-4 border-l-secondary mb-12">
              <h3 className="text-2xl font-bold mb-6">What You're Really Buying</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">✓ Defensible Rights & Provenance</h4>
                  <p className="text-muted-foreground">Audit-ready documentation, complete chain of custody, legal defensibility.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">✓ Fast Sample → Contract → Delivery</h4>
                  <p className="text-muted-foreground">Samples available immediately. Contracts negotiated efficiently. Delivery on agreed timelines.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">✓ Deal Design Tailored to You</h4>
                  <p className="text-muted-foreground">Customized to your model, geography, and risk profile. No one-size-fits-all licensing.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">✓ Human Curation</h4>
                  <p className="text-muted-foreground">No platform dumping. Every dataset is curated by people who understand content and culture.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6">
                  Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#5D1681] via-[#8B2A9B] to-[#5D1681] text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start<br />
              <span className="text-gradient-light">the Conversation?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Whether you're sourcing training data or looking to monetise your content library, we're ready for a conversation. We work with both sides of the market—and we understand what each side needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/for-ai-companies">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-10 py-7">
                  I'm an AI buyer
                </Button>
              </Link>
              <Link href="/for-content-owners">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 backdrop-blur-sm">
                  I'm a content owner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GMC Attribution */}
      <section className="py-12 border-t bg-white">
        <div className="container">
          <div className="flex items-center justify-center gap-4">
            <img 
              src="/logo-header.png" 
              alt="Global Media Consult" 
              className="h-12 w-auto"
            />
            <div className="text-left">
              <p className="font-semibold text-lg">Content AImbassy</p>
              <p className="text-sm text-muted-foreground">a service by Global Media Consult</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
