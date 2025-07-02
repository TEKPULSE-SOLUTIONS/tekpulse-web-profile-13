
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowLeft, Clock, Tag } from 'lucide-react';
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
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Machine Learning Algorithms for Predictive Analytics in Business",
    slug: "machine-learning-predictive-analytics",
    date: new Date(Date.now() - 86400000).toLocaleDateString(),
    description: "Discover how machine learning algorithms are transforming business intelligence through advanced predictive analytics and data-driven decision making.",
    category: "Machine Learning",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Artificial Intelligence in Modern Software Development",
    slug: "ai-software-development",
    date: new Date(Date.now() - 172800000).toLocaleDateString(),
    description: "How AI is reshaping software development processes, from code generation to automated testing and intelligent debugging solutions.",
    category: "Artificial Intelligence",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Zero Trust Architecture: The Future of Cybersecurity",
    slug: "zero-trust-cybersecurity",
    date: new Date(Date.now() - 259200000).toLocaleDateString(),
    description: "Understanding Zero Trust security models and their implementation in modern enterprise environments to protect against evolving cyber threats.",
    category: "Cybersecurity",
    readTime: "9 min read"
  },
  {
    id: 5,
    title: "Deep Learning Applications in Computer Vision",
    slug: "deep-learning-computer-vision",
    date: new Date(Date.now() - 345600000).toLocaleDateString(),
    description: "Exploring advanced deep learning techniques for computer vision applications including object detection, image recognition, and autonomous systems.",
    category: "Machine Learning & AI",
    readTime: "10 min read"
  },
  {
    id: 6,
    title: "Smart Contracts and Decentralized Applications (DApps)",
    slug: "smart-contracts-dapps",
    date: new Date(Date.now() - 432000000).toLocaleDateString(),
    description: "A comprehensive guide to building smart contracts and decentralized applications on blockchain platforms like Ethereum and Solana.",
    category: "Blockchain",
    readTime: "8 min read"
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

          {/* Article Header */}
          <Card className="mb-8">
            <CardHeader className="pb-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                  <Tag className="h-3 w-3 mr-1" />
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {post.title}
              </CardTitle>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                {post.description}
              </p>
            </CardHeader>
          </Card>

          {/* Article Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {content.introduction}
                </p>
              </CardContent>
            </Card>

            {/* Content Sections */}
            {content.sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {section.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            ))}

            {/* Conclusion */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">
                  Conclusion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 leading-relaxed text-base font-medium">
                  {content.conclusion}
                </p>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Interested in Learning More?</h3>
                <p className="mb-4 opacity-90">
                  Explore our other articles on cutting-edge technology topics.
                </p>
                <Button asChild variant="secondary">
                  <Link to="/blog">
                    View All Articles
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
