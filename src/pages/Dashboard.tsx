
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload, Calendar, FileText, User } from 'lucide-react';

const Dashboard = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    date: '',
    description: '',
    pdfFile: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        pdfFile: file
      }));
    } else {
      toast({
        title: "Invalid File",
        description: "Please select a PDF file.",
        variant: "destructive"
      });
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.slug || !formData.date || !formData.description || !formData.pdfFile) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields and upload a PDF file.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would upload to a database and file storage
    console.log('Blog post data:', formData);
    
    toast({
      title: "Success!",
      description: "Post uploaded!",
    });

    // Reset form
    setFormData({
      title: '',
      slug: '',
      date: '',
      description: '',
      pdfFile: null
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-4xl font-bold text-gray-900">My Blog Dashboard</h1>
            </div>
            <p className="text-xl text-gray-600">
              Upload and manage your blog posts
            </p>
          </div>

          {/* Upload Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload New Blog Post
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="Enter blog post title"
                    required
                  />
                </div>

                {/* Slug */}
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug (URL-friendly)</Label>
                  <Input
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder="url-friendly-version"
                    required
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date">Post Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter a short summary of your blog post"
                    rows={4}
                    required
                  />
                </div>

                {/* PDF Upload */}
                <div className="space-y-2">
                  <Label htmlFor="pdf">PDF File</Label>
                  <Input
                    id="pdf"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                  />
                  {formData.pdfFile && (
                    <p className="text-sm text-green-600 flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {formData.pdfFile.name}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Blog Post
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
