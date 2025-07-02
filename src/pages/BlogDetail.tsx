
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Download, ArrowLeft } from 'lucide-react';

// Enhanced blog posts data matching the Blog page
const blogPosts = [
  {
    id: 1,
    title: "Transformative Blockchain Technology in the Cybersecurity Sector",
    slug: "blockchain-cybersecurity",
    date: new Date().toLocaleDateString(),
    description: "Exploring how blockchain is revolutionizing cybersecurity with decentralized identity, tamper-proof ledgers, and smart contract automation. This comprehensive guide covers the intersection of blockchain technology and cybersecurity, examining how distributed ledger technology can enhance security protocols, prevent data breaches, and create more resilient digital infrastructures.",
    pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    category: "Blockchain & Cybersecurity"
  },
  {
    id: 2,
    title: "Machine Learning Algorithms for Predictive Analytics in Business",
    slug: "machine-learning-predictive-analytics",
    date: new Date(Date.now() - 86400000).toLocaleDateString(),
    description: "Discover how machine learning algorithms are transforming business intelligence through advanced predictive analytics and data-driven decision making. Learn about regression models, classification algorithms, and neural networks that enable businesses to forecast trends, optimize operations, and gain competitive advantages through intelligent data analysis.",
    pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    category: "Machine Learning"
  },
  {
    id: 3,
    title: "Artificial Intelligence in Modern Software Development",
    slug: "ai-software-development",
    date: new Date(Date.now() - 172800000).toLocaleDateString(),
    description: "How AI is reshaping software development processes, from code generation to automated testing and intelligent debugging solutions. Explore the latest AI-powered development tools, automated code review systems, and intelligent IDEs that are revolutionizing how developers write, test, and deploy software applications.",
    pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    category: "Artificial Intelligence"
  },
  {
    id: 4,
    title: "Zero Trust Architecture: The Future of Cybersecurity",
    slug: "zero-trust-cybersecurity",
    date: new Date(Date.now() - 259200000).toLocaleDateString(),
    description: "Understanding Zero Trust security models and their implementation in modern enterprise environments to protect against evolving cyber threats. This detailed analysis covers the principles of 'never trust, always verify', micro-segmentation, and continuous authentication in building robust security frameworks.",
    pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    category: "Cybersecurity"
  },
  {
    id: 5,
    title: "Deep Learning Applications in Computer Vision",
    slug: "deep-learning-computer-vision",
    date: new Date(Date.now() - 345600000).toLocaleDateString(),
    description: "Exploring advanced deep learning techniques for computer vision applications including object detection, image recognition, and autonomous systems. Dive into convolutional neural networks, transfer learning, and state-of-the-art architectures that enable machines to understand and interpret visual information with human-level accuracy.",
    pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    category: "Machine Learning & AI"
  },
  {
    id: 6,
    title: "Smart Contracts and Decentralized Applications (DApps)",
    slug: "smart-contracts-dapps",
    date: new Date(Date.now() - 432000000).toLocaleDateString(),
    description: "A comprehensive guide to building smart contracts and decentralized applications on blockchain platforms like Ethereum and Solana. Learn about Solidity programming, gas optimization, security best practices, and the architecture of decentralized systems that are transforming traditional business models.",
    pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    category: "Blockchain"
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

          {/* Post Header */}
          <Card className="mb-8">
            <CardHeader>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                  {post.category}
                </span>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                {post.title}
              </CardTitle>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <Button asChild variant="outline" size="sm">
                  <a href={post.pdf_url} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                {post.description}
              </p>
            </CardContent>
          </Card>

          {/* PDF Viewer */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">PDF Viewer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[600px] border rounded-lg overflow-hidden">
                <iframe 
                  src={post.pdf_url} 
                  width="100%" 
                  height="600px" 
                  style={{ border: 'none' }}
                  title={`PDF: ${post.title}`}
                />
              </div>
              <div className="mt-4 text-center">
                <Button asChild>
                  <a href={post.pdf_url} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
