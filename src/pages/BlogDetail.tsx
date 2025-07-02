
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowLeft, Clock, Tag, User } from 'lucide-react';
import { generateBlogContent } from '../utils/contentGenerator';

// Enhanced blog posts data matching the Blog page
const blogPosts = [
  {
    id: 1,
    title: "Transformative Blockchain Technology in the Cybersecurity Sector",
    slug: "blockchain-cybersecurity",
    date: new Date().toLocaleDateString(),
    description: "Exploring how blockchain is revolutionizing cybersecurity with decentralized identity, tamper-proof ledgers, and smart contract automation.",
    category: "Blockchain & Cybersecurity",
    readTime: "8 min read",
    author: "Dr. Sarah Chen",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    sectionImages: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 2,
    title: "Machine Learning Algorithms for Predictive Analytics in Business",
    slug: "machine-learning-predictive-analytics",
    date: new Date(Date.now() - 86400000).toLocaleDateString(),
    description: "Discover how machine learning algorithms are transforming business intelligence through advanced predictive analytics and data-driven decision making.",
    category: "Machine Learning",
    readTime: "7 min read",
    author: "Prof. Michael Rodriguez",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    sectionImages: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 3,
    title: "Artificial Intelligence in Modern Software Development",
    slug: "ai-software-development",
    date: new Date(Date.now() - 172800000).toLocaleDateString(),
    description: "How AI is reshaping software development processes, from code generation to automated testing and intelligent debugging solutions.",
    category: "Artificial Intelligence",
    readTime: "6 min read",
    author: "Alex Kim",
    heroImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    sectionImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 4,
    title: "Zero Trust Architecture: The Future of Cybersecurity",
    slug: "zero-trust-cybersecurity",
    date: new Date(Date.now() - 259200000).toLocaleDateString(),
    description: "Understanding Zero Trust security models and their implementation in modern enterprise environments to protect against evolving cyber threats.",
    category: "Cybersecurity",
    readTime: "9 min read",
    author: "Emma Thompson",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    sectionImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 5,
    title: "Deep Learning Applications in Computer Vision",
    slug: "deep-learning-computer-vision",
    date: new Date(Date.now() - 345600000).toLocaleDateString(),
    description: "Exploring advanced deep learning techniques for computer vision applications including object detection, image recognition, and autonomous systems.",
    category: "Machine Learning & AI",
    readTime: "10 min read",
    author: "Dr. James Wilson",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    sectionImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 6,
    title: "Smart Contracts and Decentralized Applications (DApps)",
    slug: "smart-contracts-dapps",
    date: new Date(Date.now() - 432000000).toLocaleDateString(),
    description: "A comprehensive guide to building smart contracts and decentralized applications on blockchain platforms like Ethereum and Solana.",
    category: "Blockchain",
    readTime: "8 min read",
    author: "Lisa Zhang",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    sectionImages: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const content = generateBlogContent(post.slug, post.category);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
            <img 
              src={post.heroImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <Tag className="h-3 w-3 mr-1" />
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-white/90">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center text-sm text-white/90">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Author and Meta Info */}
          <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">Technology Expert</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {post.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Article Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="overflow-hidden shadow-lg border-0">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  {content.introduction}
                </p>
              </div>
            </Card>

            {/* Content Sections with alternating images */}
            {content.sections.map((section, index) => (
              <Card key={index} className="overflow-hidden shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {section.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-6 order-2 md:order-1">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {section.content}
                      </p>
                    </div>
                    <div className={`relative h-64 md:h-auto order-1 md:order-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <img 
                        src={post.sectionImages[index % post.sectionImages.length]} 
                        alt={section.heading}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                    </div>
                    {index % 2 === 1 && (
                      <div className="p-6 order-2">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {section.content}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Visual Statistics/Infographic Section */}
            <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-xl border-0">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Key Industry Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">85%</div>
                    <div className="text-sm opacity-90">Organizations implementing this technology</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">300%</div>
                    <div className="text-sm opacity-90">Average efficiency improvement</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">$2.4B</div>
                    <div className="text-sm opacity-90">Market size by 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conclusion */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-900">
                  Conclusion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 leading-relaxed text-base font-medium mb-4">
                  {content.conclusion}
                </p>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Thank you for reading this comprehensive analysis</span>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-xl border-0">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Stay Ahead of the Technology Curve</h3>
                  <p className="mb-6 opacity-90 text-lg">
                    Explore our other articles on cutting-edge technology topics and join thousands of professionals staying informed.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                      <Link to="/blog">
                        View All Articles
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                      <Link to="/project-request">
                        Request Custom Analysis
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
