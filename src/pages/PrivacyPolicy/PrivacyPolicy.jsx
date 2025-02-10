import React from "react";
import styles from "./privacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.priv}>
      <h1>Privacy Policy</h1>
      <h3>Effective Date: 9th February, 2025</h3>
      <p>
        At CornerCart, we are committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, and safeguard your personal
        information when you visit our website or make a purchase from us. By
        using our website, you agree to the terms outlined in this Privacy
        Policy.
      </p>
      <hr />

      <h2>1. Information We Collect</h2>
      <p>We collect information from you when you:</p>
      <ul>
        <li>Register an account: Name, email address, password.</li>
        <li>
          Make a purchase: Shipping address, billing address, phone number, and
          payment information.
        </li>
        <li>
          Browse our website: Information about your device, IP address, browser
          type, and pages visited.
        </li>
        <li>
          Contact us: Any information you provide in emails, messages, or forms.
        </li>
      </ul>
      <hr />

      <h2>2. How We Use Your Information</h2>
      <p>We use your personal information to:</p>
      <ul>
        <li>Process and fulfill your orders.</li>
        <li>
          Communicate with you about your orders, updates, and promotions.
        </li>
        <li>Improve our website, products, and services.</li>
        <li>Provide customer support and respond to inquiries.</li>
      </ul>
      <hr />

      <h2>3. How We Protect Your Information</h2>
      <p>
        We take data security seriously and implement measures to protect your
        personal information, including:
      </p>
      <ul>
        <li>
          Secure Socket Layer (SSL) encryption to protect your transactions.
        </li>
        <li>Regular security updates and monitoring.</li>
        <li>
          Restricted access to your personal data to authorized personnel only.
        </li>
      </ul>
      <hr />

      <h2>4. Sharing Your Information</h2>
      <p>
        We do not sell, trade, or rent your personal information to third
        parties. However, we may share your information with:
      </p>
      <ul>
        <li>
          Service Providers: Payment processors, shipping companies, and other
          third parties that help us operate our website and fulfill your
          orders.
        </li>
        <li>
          Legal Requirements: If required by law, we may disclose your
          information to comply with legal obligations or protect our rights.
        </li>
      </ul>
      <hr />

      <h2>5. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated Effective Date. We encourage you to
        review this policy periodically to stay informed about how we protect
        your information.
      </p>
      <hr />

      <h2>Conclusion</h2>
      <p>
        Your privacy is important to us, and we are dedicated to protecting your
        personal information. Thank you for trusting CornerCart with your
        shopping experience.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
