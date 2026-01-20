import Container from "@/components/global/container";

const TermsAndConditions = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 min-h-screen bg-white">
            <Container>
                <div className="max-w-4xl mx-auto text-gray-900">
                    <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
                    
                    <p className="text-sm text-gray-600 mb-8 text-center">
                        <strong>Last updated: June 28, 2025</strong>
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-6">
                        Welcome to SocialflyAI ("Service," "Platform," "we," "us," or "our"). These Terms of Service ("Terms") govern your use of our social media management SaaS platform and related services.
                    </p>
                    <p className="mb-6">
                        By accessing or using SocialflyAI, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of these terms, you may not access the Service.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                    <p className="mb-4">
                        SocialflyAI is a social media management SaaS platform that enables users to:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>Manage and schedule social media posts across platforms</li>
                        <li>Monitor social media analytics and engagement metrics</li>
                        <li>Automate social media workflows and content distribution</li>
                        <li>Integrate with LinkedIn and other social platforms via APIs</li>
                        <li>Track performance and optimize social media strategies</li>
                    </ul>
                    <p className="mb-6">
                        Our platform integrates with third-party services including LinkedIn APIs for social media management, Firebase for authentication, and GCP for hosting.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
                    <p className="mb-4">
                        To use our Service, you must:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>Be at least 18 years old or have parental consent</li>
                        <li>Provide accurate and complete registration information</li>
                        <li>Maintain the security of your account credentials</li>
                        <li>Accept responsibility for all activities under your account</li>
                        <li>Notify us immediately of any unauthorized use</li>
                    </ul>
                    <p className="mb-6">
                        You may register using Google OAuth or email/password authentication. Account deletion requests can be made by contacting dev.samikc@gmail.com.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>
                    <p className="mb-4">
                        You agree NOT to use the Service to:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>Send spam, unsolicited emails, or violate anti-spam laws</li>
                        <li>Collect email addresses without proper consent</li>
                        <li>Create misleading or deceptive lead magnets</li>
                        <li>Violate any applicable laws or regulations</li>
                        <li>Infringe on intellectual property rights</li>
                        <li>Transmit malware, viruses, or harmful code</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Use the platform for illegal or unethical purposes</li>
                    </ul>
                    <p className="mb-6">
                        Violation of this policy may result in immediate account suspension or termination.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">5. Third-Party Service Integration</h2>
                    <p className="mb-4">
                        By using SocialflyAI, you acknowledge and agree to the terms of service and privacy policies of our integrated third-party services:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>LinkedIn APIs:</strong> Used for social media management and analytics</li>
                        <li><strong>Firebase:</strong> Handles authentication and user management</li>
                        <li><strong>Google Cloud Platform (GCP):</strong> Provides hosting and data storage</li>
                    </ul>
                    <p className="mb-6">
                        We are not responsible for the availability, functionality, or policies of these third-party services.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">6. Payment Terms and Billing</h2>
                    <p className="mb-4">
                        Payment processing is handled exclusively by Polar.sh. Our current pricing structure includes:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Free Plan:</strong> Limited features with usage restrictions</li>
                        <li><strong>Lifetime Plan:</strong> One-time payment for unlimited access</li>
                    </ul>
                    <p className="mb-6">
                        All payments are processed securely by Polar.sh according to their terms of service. Refunds are subject to Polar.sh's refund policy.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">7. Data Ownership and Usage Rights</h2>
                    <h3 className="text-xl font-medium mb-2">Your Data</h3>
                    <p className="mb-4">
                        You retain ownership of all social media content, posts, and data you create or upload to the platform, including analytics and engagement metrics.
                    </p>
                    <h3 className="text-xl font-medium mb-2">Our Rights</h3>
                    <p className="mb-4">
                        You grant us a limited license to process your data solely to provide our services, including:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>Displaying social media content in the dashboard</li>
                        <li>Processing API data from LinkedIn for analytics</li>
                        <li>Generating performance reports and insights</li>
                        <li>Providing customer support</li>
                    </ul>
                    <p className="mb-6">
                        We do not claim ownership of your social media content and will not use it for purposes outside of providing our services.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">8. GDPR and Privacy Compliance</h2>
                    <p className="mb-4">
                        As a user of SocialflyAI, you are responsible for:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>Obtaining proper consent for social media data collection</li>
                        <li>Providing clear privacy notices on your social media profiles</li>
                        <li>Complying with GDPR, CCPA, and other applicable privacy laws</li>
                        <li>Honoring user requests for data deletion or access</li>
                        <li>Ensuring your social media activities comply with platform policies</li>
                    </ul>
                    <p className="mb-6">
                        We provide tools to help with compliance, but ultimate responsibility rests with you as the data controller for your social media data.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">9. Service Availability and Limitations</h2>
                    <p className="mb-4">
                        We strive to maintain high service availability but cannot guarantee:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>100% uptime or uninterrupted service</li>
                        <li>Compatibility with all devices or browsers</li>
                        <li>Availability of third-party integrations</li>
                        <li>Data backup or recovery in all circumstances</li>
                    </ul>
                    <p className="mb-6">
                        We reserve the right to modify, suspend, or discontinue any aspect of the service with reasonable notice.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">10. Intellectual Property Rights</h2>
                    <p className="mb-6">
                        The SocialflyAI platform, including its design, code, features, and branding, is protected by intellectual property laws and remains our exclusive property.
                    </p>
                    <p className="mb-6">
                        You may not copy, modify, distribute, or create derivative works of our platform without explicit written permission.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
                    <p className="mb-4">
                        To the maximum extent permitted by law, SocialflyAI shall not be liable for:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>Indirect, incidental, or consequential damages</li>
                        <li>Loss of profits, data, or business opportunities</li>
                        <li>Damages resulting from third-party service failures</li>
                        <li>Social media content or platform performance</li>
                        <li>Compliance failures related to your use of collected data</li>
                    </ul>
                    <p className="mb-6">
                        Our total liability shall not exceed the amount paid by you for the service in the 12 months preceding the claim.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
                    <p className="mb-6">
                        You agree to indemnify and hold SocialflyAI harmless from any claims, damages, or expenses arising from your use of the service, violation of these terms, or infringement of third-party rights.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">13. Account Termination</h2>
                    <p className="mb-4">
                        Either party may terminate the service relationship:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>By You:</strong> At any time by contacting dev.samikc@gmail.com</li>
                        <li><strong>By Us:</strong> For violation of terms, illegal activity, or abuse</li>
                    </ul>
                    <p className="mb-6">
                        Upon termination, your access will be suspended, and data may be deleted according to our retention policies.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">14. Dispute Resolution</h2>
                    <p className="mb-6">
                        Any disputes arising from these terms shall be resolved through binding arbitration or in courts of competent jurisdiction. You waive the right to participate in class action lawsuits.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
                    <p className="mb-6">
                        We reserve the right to modify these Terms at any time. Material changes will be communicated via email with 30 days' notice. Continued use after changes constitutes acceptance of new terms.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">16. Governing Law</h2>
                    <p className="mb-6">
                        These Terms are governed by applicable laws and regulations. Any legal proceedings shall be conducted in English.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">17. Contact Information</h2>
                    <p className="mb-4">
                        For questions about these Terms of Service, please contact us:
                    </p>
                    <p className="mb-2"><strong>Email:</strong> support@socialflyai.com</p>
                    <p className="mb-2"><strong>Website:</strong> socialflyai.com</p>
                    <p className="mb-6"><strong>Response Time:</strong> We aim to respond within 5 business days</p>
                    
                    <h2 className="text-2xl font-semibold mb-4">18. Severability</h2>
                    <p className="mb-6">
                        If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">19. Entire Agreement</h2>
                    <p className="mb-6">
                        These Terms, together with our Privacy Policy, constitute the entire agreement between you and SocialflyAI regarding the use of our service.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default TermsAndConditions;