import Container from "@/components/global/container";

const PrivacyPolicy = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 min-h-screen bg-white">
            <Container>
                <div className="max-w-4xl mx-auto text-gray-900">
                    <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
                    
                    <p className="text-sm text-gray-600 mb-8 text-center">
                        <strong>Effective Date: January 19, 2026</strong>
                    </p>
                    
                    <p className="mb-6">
                        SocialflyAI ("we", "us", "our") operates socialflyai.vercel.app (the "Site") and provides a social media management SaaS platform (the "Service"). This Privacy Policy describes how we collect, use, and protect information when you use our Service, including integrations with platforms like LinkedIn.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                    <p className="mb-4">
                        We collect:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Account Data</strong>: Email, password (hashed) for user accounts.</li>
                        <li><strong>Social API Data</strong>: Company Page posts, comments, reactions, and analytics from LinkedIn Community Management APIs via OAuth 2.0. This is limited to organization-level data (w_organization_social, r_organization_social permissions); no individual profile data is accessed or stored. [web:24]</li>
                        <li><strong>Usage Data</strong>: Aggregated analytics on platform interactions (e.g., login times).</li>
                    </ul>
                    <p className="mb-6">
                        We do not collect sensitive personal data.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>Display and manage social content in the dashboard (e.g., post scheduling, comment replies).</li>
                        <li>Provide analytics visualizations without raw data export.</li>
                        <li>Improve Service via aggregated, anonymized insights.</li>
                        <li>No use for advertising, profiling, or third-party sales. [web:41]</li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
                    <p className="mb-4">
                        We do not sell, rent, or share personal or API data with third parties, except:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>Service providers (e.g., Firebase for auth, GCP for hosting) under strict agreements.</li>
                        <li>Legal requirements.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold mb-4">Data Storage and Deletion</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>API data is session-tied and deleted immediately after logout or revocation.</li>
                        <li>Users can request full deletion via support@socialflyai.com; processed within 30 days.</li>
                        <li>Secure storage with encryption; backups purged accordingly. [web:16]</li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold mb-4">Compliance</h2>
                    <p className="mb-6">
                        Compliant with India's Digital Personal Data Protection Act 2023 (DPDP), GDPR, and CCPA. EU/UK users have rights to access, rectify, erase data. Contact our compliance team at support@socialflyai.com. [web:36]
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                    <p className="mb-6">
                        Service not for under 18; no knowing collection.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">Changes to Policy</h2>
                    <p className="mb-8">
                        Updates posted here; continued use implies acceptance.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="mb-2">
                        <strong>Email:</strong> support@socialflyai.com
                    </p>
                    <p>
                        <strong>Address:</strong> Hyderabad, Telangana, India
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;