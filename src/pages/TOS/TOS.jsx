import React from "react";
import styles from "./tos.module.css";

const TOS = () => {
  return (
    <div className={styles.tos}>
      <h1>Terms of Service</h1>
      <h3>Effective Date: 9th February, 2025</h3>
      <p>
        Welcome to CornerCart! By using our website, you agree to the following
        terms. Please read them carefully.
      </p>
      <hr />
      <h2>1. General Use</h2>
      <p>
        By accessing CornerCart, you confirm that you’re at least 18 years old
        (or have parental consent) and will use the site lawfully. We may
        suspend or terminate accounts that violate these terms.
      </p>
      <hr />

      <h2>2. Orders & Payments</h2>
      <p>
        We strive to provide accurate product details and pricing but can’t
        guarantee they are always error-free. Prices and availability may change
        without notice. By placing an order, you authorize us to process
        payments securely using your selected method (Credit/Debit Cards, UPI,
        etc.).
      </p>
      <hr />

      <h2>3. Shipping, Returns & Refunds</h2>
      <p>
        Orders are processed within [X days], with delivery times varying by
        location. You may return eligible items within [X days] of delivery,
        provided they are unused and in original packaging. Shipping fees are
        non-refundable.
      </p>
      <hr />

      <h2>4. Privacy & Security</h2>
      <p>
        Your personal data is protected and only used to process your orders. We
        do not store full payment details, and all transactions are secure. For
        more, read our Privacy Policy.
      </p>
      <hr />

      <h2>5. Limitation of Liability</h2>
      <p>
        We are not responsible for indirect, incidental, or unforeseen damages
        arising from the use of our website or products. Your use of CornerCart
        is at your own risk.
      </p>
      <hr />

      <h2>6. Changes to Terms</h2>
      <p>
        We may update these terms at any time. Continued use of CornerCart after
        changes means you accept the updated terms.
      </p>
      <hr />

      <h2>Thank you for choosing CornerCart!</h2>
      <hr />
    </div>
  );
};

export default TOS;
