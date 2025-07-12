
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';

// This would typically come from a database or API
const newsArticles = [
  {
    id: 1,
    title: "Transformative Blockchain Technology in the Cybersecurity Sector",
    slug: "blockchain-cybersecurity",
    summary: "Discover how blockchain is reshaping cybersecurity by decentralizing control, eliminating single points of failure, and empowering smart automated policies.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 mb-6">Blockchain technology is revolutionizing the cybersecurity landscape by introducing decentralized security models that eliminate traditional single points of failure.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Decentralized Security Architecture</h2>
        <p class="text-gray-700 mb-6">Unlike conventional centralized systems, blockchain creates a distributed network where security is maintained across multiple nodes, making it virtually impossible for attackers to compromise the entire system. This distributed approach ensures that even if one or several nodes are compromised, the integrity of the overall system remains intact.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Smart Contract Automation</h2>
        <p class="text-gray-700 mb-6">Smart contracts enable automated security policies that execute without human intervention, reducing the risk of human error and ensuring consistent security protocols. These self-executing contracts with the terms directly written into code provide an additional layer of security and transparency.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Immutable Audit Trails</h2>
        <p class="text-gray-700 mb-6">Every transaction and access attempt is recorded on an immutable ledger, providing complete transparency and accountability for security events. This creates an unalterable record of all activities, making it easier to detect and investigate security incidents.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Zero-Trust Implementation</h2>
        <p class="text-gray-700 mb-6">Blockchain naturally supports zero-trust security models by requiring verification for every transaction and access request, regardless of the source. This approach assumes no inherent trust and continuously validates every request.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Future Implications</h2>
        <p class="text-gray-700 mb-6">As blockchain technology continues to mature, we can expect to see even more innovative applications in cybersecurity, from decentralized identity management to quantum-resistant cryptographic protocols.</p>
      </div>
    `,
    category: "Tech Insights",
    date: new Date().toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: 2,
    title: "TekPulse Solutions Launches Advanced ERP Suite",
    slug: "tekpulse-erp-launch",
    summary: "Our latest enterprise resource planning solution integrates AI-powered analytics with seamless workflow automation.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 mb-6">TekPulse Solutions today announced the launch of our most advanced Enterprise Resource Planning (ERP) suite, designed to revolutionize how businesses manage their operations through AI-powered analytics and seamless workflow automation.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">AI-Powered Analytics Dashboard</h2>
        <p class="text-gray-700 mb-6">The new ERP suite features an intelligent dashboard that provides real-time insights into business operations, automatically identifying trends, anomalies, and optimization opportunities. Machine learning algorithms continuously learn from your data to provide increasingly accurate predictions and recommendations.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Seamless Workflow Automation</h2>
        <p class="text-gray-700 mb-6">Our advanced automation engine can handle complex business processes end-to-end, from procurement and inventory management to financial reporting and customer relationship management. The system intelligently routes tasks, approvals, and notifications to the right people at the right time.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Integration Capabilities</h2>
        <p class="text-gray-700 mb-6">The ERP suite seamlessly integrates with existing business systems through robust APIs and pre-built connectors for popular platforms. This ensures minimal disruption during implementation while maximizing the value of your existing technology investments.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Enhanced Security and Compliance</h2>
        <p class="text-gray-700 mb-6">Built with enterprise-grade security features including role-based access controls, data encryption, and comprehensive audit trails. The system helps organizations maintain compliance with industry regulations and standards.</p>
      </div>
    `,
    category: "Product Launch",
    date: new Date(Date.now() - 86400000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Partnership with Leading Financial Institutions",
    slug: "financial-partnership",
    summary: "TekPulse Solutions announces strategic partnerships to deliver cutting-edge fintech solutions.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 mb-6">TekPulse Solutions has formed strategic partnerships with leading financial institutions to deliver innovative fintech solutions that address the evolving needs of the banking and financial services industry.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Digital Banking Transformation</h2>
        <p class="text-gray-700 mb-6">Our partnerships focus on accelerating digital transformation initiatives, including mobile banking platforms, digital payment solutions, and automated lending systems. These solutions help financial institutions improve customer experience while reducing operational costs.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Advanced Risk Management</h2>
        <p class="text-gray-700 mb-6">We're collaborating to develop sophisticated risk management platforms that use machine learning and artificial intelligence to detect fraud, assess credit risk, and ensure regulatory compliance in real-time.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Open Banking Solutions</h2>
        <p class="text-gray-700 mb-6">Our open banking APIs enable secure data sharing between financial institutions and third-party providers, fostering innovation and competition while maintaining the highest security standards.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Future Collaboration</h2>
        <p class="text-gray-700 mb-6">These partnerships represent just the beginning of our commitment to revolutionizing financial services through technology. We look forward to continuing our collaboration to bring innovative solutions to market.</p>
      </div>
    `,
    category: "Partnership",
    date: new Date(Date.now() - 172800000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: 4,
    title: "AI-Driven Analytics: The Future of Business Intelligence",
    slug: "ai-business-intelligence",
    summary: "Exploring how artificial intelligence is transforming data analytics and business decision-making processes.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 mb-6">Artificial Intelligence is fundamentally transforming how businesses collect, analyze, and act on data. AI-driven analytics platforms are enabling organizations to make faster, more accurate decisions based on comprehensive data insights.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Predictive Analytics Revolution</h2>
        <p class="text-gray-700 mb-6">Modern AI systems can analyze historical data to predict future trends, customer behavior, and market conditions with unprecedented accuracy. This enables proactive decision-making rather than reactive responses to changing conditions.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Real-Time Decision Making</h2>
        <p class="text-gray-700 mb-6">AI-powered analytics platforms process data streams in real-time, providing instant insights that enable immediate action. This capability is particularly valuable in fast-moving industries where timing is critical.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Automated Pattern Recognition</h2>
        <p class="text-gray-700 mb-6">Machine learning algorithms excel at identifying patterns and anomalies in large datasets that would be impossible for humans to detect. This automated pattern recognition helps businesses uncover hidden opportunities and risks.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Democratization of Data Science</h2>
        <p class="text-gray-700 mb-6">AI-driven analytics tools are making advanced data science capabilities accessible to business users without requiring deep technical expertise. Natural language interfaces and automated insights democratize data-driven decision making across organizations.</p>
      </div>
    `,
    category: "Tech Insights",
    date: new Date(Date.now() - 259200000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: 5,
    title: "TekPulse Solutions Expands to North American Market",
    slug: "north-america-expansion",
    summary: "We are excited to announce our expansion into the North American market with our new Boston office.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 mb-6">TekPulse Solutions is proud to announce our expansion into the North American market with the opening of our new office in Boston, Massachusetts. This strategic move marks a significant milestone in our global growth strategy.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategic Location</h2>
        <p class="text-gray-700 mb-6">Boston was chosen for its thriving technology ecosystem, world-class universities, and access to top talent. The city's rich history of innovation and strong business environment make it an ideal location for our North American headquarters.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Local Talent and Partnerships</h2>
        <p class="text-gray-700 mb-6">We're actively recruiting local talent and establishing partnerships with leading universities and research institutions in the region. This will enable us to tap into the area's exceptional pool of engineers, data scientists, and business professionals.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Service Offerings</h2>
        <p class="text-gray-700 mb-6">Our Boston office will provide the full range of TekPulse Solutions services, including custom software development, AI/ML solutions, cybersecurity services, and enterprise consulting. We're committed to bringing the same level of excellence that has made us successful globally.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Future Growth Plans</h2>
        <p class="text-gray-700 mb-6">This expansion is part of our broader strategy to establish a strong presence in key markets worldwide. We plan to continue growing our North American operations and exploring additional opportunities in the region.</p>
      </div>
    `,
    category: "Company News",
    date: new Date(Date.now() - 345600000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Cybersecurity Workshop Series Launched",
    slug: "cybersecurity-workshop-series",
    summary: "Join our comprehensive cybersecurity workshop series designed for businesses of all sizes.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 mb-6">TekPulse Solutions is launching a comprehensive cybersecurity workshop series designed to help businesses of all sizes strengthen their security posture and protect against evolving cyber threats.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Workshop Topics</h2>
        <p class="text-gray-700 mb-6">Our workshop series covers essential cybersecurity topics including threat assessment, incident response planning, employee security training, and implementing security best practices. Each session is led by certified cybersecurity experts with real-world experience.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Hands-On Learning</h2>
        <p class="text-gray-700 mb-6">Participants will engage in practical exercises using real-world scenarios to understand how cyber attacks work and how to defend against them. Interactive labs provide hands-on experience with security tools and techniques.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Customized for Your Industry</h2>
        <p class="text-gray-700 mb-6">We offer industry-specific workshops tailored to the unique security challenges faced by different sectors including healthcare, finance, manufacturing, and retail. Each workshop addresses specific regulatory requirements and industry best practices.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Certification and Follow-Up</h2>
        <p class="text-gray-700 mb-6">Participants receive certificates of completion and access to ongoing support resources. We also provide follow-up consultations to help organizations implement the security measures discussed in the workshops.</p>
      </div>
    `,
    category: "Event",
    date: new Date(Date.now() - 432000000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: 7,
    title: "New Cloud Infrastructure Services Available",
    slug: "cloud-infrastructure-services",
    summary: "Announcing our new suite of cloud infrastructure services including managed hosting and disaster recovery.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 mb-6">TekPulse Solutions is pleased to announce the launch of our comprehensive cloud infrastructure services, including managed hosting, disaster recovery, and cloud migration solutions designed to help businesses leverage the full power of cloud computing.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Managed Cloud Hosting</h2>
        <p class="text-gray-700 mb-6">Our managed hosting services provide businesses with reliable, scalable, and secure cloud infrastructure without the complexity of managing it themselves. We handle server management, security updates, monitoring, and optimization, allowing you to focus on your core business.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Disaster Recovery Solutions</h2>
        <p class="text-gray-700 mb-6">Our disaster recovery services ensure business continuity with automated backup systems, rapid recovery procedures, and comprehensive testing protocols. We guarantee minimal downtime and data loss in the event of system failures or disasters.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cloud Migration Services</h2>
        <p class="text-gray-700 mb-6">We provide end-to-end cloud migration services to help businesses transition from on-premises infrastructure to cloud platforms. Our migration process includes assessment, planning, execution, and post-migration optimization to ensure seamless transitions.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">24/7 Support and Monitoring</h2>
        <p class="text-gray-700 mb-6">All our cloud services include round-the-clock monitoring and support from our team of certified cloud engineers. We proactively monitor your infrastructure and provide immediate response to any issues that arise.</p>
      </div>
    `,
    category: "Product Launch",
    date: new Date(Date.now() - 518400000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: 8,
    title: "TekPulse Solutions Wins Tech Innovation Award",
    slug: "tech-innovation-award",
    summary: "We are honored to receive the Tech Innovation Award for our contributions to enterprise software development.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 mb-6">TekPulse Solutions is honored to receive the prestigious Tech Innovation Award for our groundbreaking contributions to enterprise software development and our commitment to pushing the boundaries of what's possible in technology.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Recognition for Innovation</h2>
        <p class="text-gray-700 mb-6">This award recognizes our innovative approach to solving complex business challenges through technology, particularly our work in artificial intelligence, machine learning, and enterprise automation solutions that have transformed how businesses operate.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Award Criteria</h2>
        <p class="text-gray-700 mb-6">The Tech Innovation Award is presented to companies that demonstrate exceptional innovation, technical excellence, and positive impact on the industry. Winners are selected based on technological advancement, market impact, and contribution to the broader tech community.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Team Achievement</h2>
        <p class="text-gray-700 mb-6">This recognition belongs to our entire team of talented engineers, designers, and innovators who work tirelessly to create solutions that make a real difference for our clients. Their dedication to excellence and continuous learning drives our success.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Commitment to Innovation</h2>
        <p class="text-gray-700 mb-6">This award reinforces our commitment to innovation and excellence. We will continue investing in research and development, exploring emerging technologies, and creating solutions that help our clients stay ahead in an increasingly competitive landscape.</p>
      </div>
    `,
    category: "Company News",
    date: new Date(Date.now() - 604800000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: 9,
    title: "Machine Learning in Healthcare: A Partnership Success",
    slug: "ml-healthcare-partnership",
    summary: "Our collaboration with healthcare providers demonstrates the power of AI in improving patient outcomes.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 mb-6">TekPulse Solutions' collaboration with leading healthcare providers has demonstrated the transformative power of machine learning and artificial intelligence in improving patient outcomes and streamlining healthcare operations.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Predictive Healthcare Analytics</h2>
        <p class="text-gray-700 mb-6">Our machine learning models analyze patient data to predict health risks, identify early warning signs of diseases, and recommend preventive care measures. This proactive approach has led to earlier interventions and better patient outcomes.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Medical Image Analysis</h2>
        <p class="text-gray-700 mb-6">We've developed advanced computer vision systems that assist radiologists in analyzing medical images with greater accuracy and speed. These AI-powered tools help detect abnormalities that might be missed by human examination alone.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Clinical Decision Support</h2>
        <p class="text-gray-700 mb-6">Our clinical decision support systems provide healthcare professionals with evidence-based recommendations, drug interaction alerts, and treatment suggestions based on the latest medical research and patient-specific factors.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Patient Outcomes and Efficiency</h2>
        <p class="text-gray-700 mb-6">The implementation of our AI solutions has resulted in measurable improvements in patient outcomes, reduced diagnostic errors, and increased operational efficiency. Healthcare providers report significant time savings and enhanced quality of care.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Future of Healthcare AI</h2>
        <p class="text-gray-700 mb-6">This successful partnership demonstrates the immense potential of AI in healthcare. We're committed to continuing our work in this critical field, developing new solutions that save lives and improve the quality of healthcare for everyone.</p>
      </div>
    `,
    category: "Partnership",
    date: new Date(Date.now() - 691200000).toLocaleDateString(),
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80",
    featured: false
  }
];

const NewsArticle = () => {
  const { slug } = useParams();
  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="relative h-64 md:h-96">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full mb-2">
                  {article.category}
                </span>
                <div className="flex items-center text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.summary}
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="article-content"
            />
          </div>

          {/* Back to News */}
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsArticle;
