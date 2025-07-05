import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  country: z.string().min(2, "Please enter your country"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  tripType: z.string().min(1, "Please select a trip type"),
  numberOfPeople: z.string().min(1, "Please specify number of people"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      phone: "",
      email: "",
      tripType: "",
      numberOfPeople: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    const emailBody = `
Name: ${data.name}
Country: ${data.country}
Phone: ${data.phone}
Email: ${data.email}
Trip Type: ${data.tripType}
Number of People: ${data.numberOfPeople}
Message: ${data.message || 'No additional message'}
    `.trim();

    const mailtoLink = `mailto:info@wildernessalternativeexpedition.com?subject=Booking Inquiry from ${data.name}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Please send the email from your email client to complete your booking inquiry.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Wilderness Alternative Expedition</title>
        <meta name="description" content="Contact Wilderness Alternative Expedition for your Mount Kenya, Kilimanjaro, and safari adventures. Get in touch for personalized trip planning." />
        <meta name="keywords" content="contact wilderness alternative, mount kenya booking, kilimanjaro expedition, kenya safari contact" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-mountain py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready for your next adventure? Get in touch and let's plan your perfect expedition together.
            </p>
          </div>
        </section>

        {/* Contact Form and Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <Card className="shadow-adventure">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Book Your Adventure</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours with a personalized itinerary.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your country" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+254 XXX XXX XXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="tripType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Trip Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select trip type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="mount-kenya">Mount Kenya Trek</SelectItem>
                                  <SelectItem value="kilimanjaro">Kilimanjaro Climb</SelectItem>
                                  <SelectItem value="safari">Safari Adventure</SelectItem>
                                  <SelectItem value="combined">Combined Trek & Safari</SelectItem>
                                  <SelectItem value="custom">Custom Package</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="numberOfPeople"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Number of People</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select group size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">1 Person</SelectItem>
                                  <SelectItem value="2">2 People</SelectItem>
                                  <SelectItem value="3">3 People</SelectItem>
                                  <SelectItem value="4">4 People</SelectItem>
                                  <SelectItem value="5">5 People</SelectItem>
                                  <SelectItem value="6+">6+ People</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your specific requirements, preferred dates, or any questions you have..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        variant="adventure" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Send Inquiry"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-adventure">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
                    <CardDescription>
                      Ready to start your adventure? Contact us through any of these channels.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    {/* Email */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a 
                          href="mailto:info@wildernessalternativeexpedition.com"
                          className="text-primary hover:underline"
                        >
                          info@wildernessalternativeexpedition.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <a 
                          href="tel:+254743789655"
                          className="text-primary hover:underline"
                        >
                          +254 743 789 655
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <WhatsAppIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">WhatsApp</h3>
                        <a 
                          href="http://wa.me/254743789655"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Chat with us on WhatsApp
                        </a>
                      </div>
                    </div>

                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="shadow-adventure">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Follow Our Adventures</CardTitle>
                    <CardDescription>
                      Stay connected and see our latest expeditions and client adventures.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/wilderness_alternative?igsh=MXZrbHR1eGZxbGZhNw%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Instagram className="w-6 h-6 text-primary" />
                      </a>
                      <a
                        href="https://www.facebook.com/share/1AV2xJfpHu/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Facebook className="w-6 h-6 text-primary" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="shadow-adventure">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Our Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Based in Nanyuki, Kenya<br />
                      At the heart of Mount Kenya's adventure zone
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;