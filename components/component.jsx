"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Component() {
  const [showWarning, setShowWarning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(true);
    }, remainingTime * 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showWarning) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showWarning]);

  const handleProceed = () => {
    if (remainingTime > 0) {
      setShowWarning(true);
    } else {
      // Redirect to "/2" after 10 minutes
      router.push("/2");
    }
  };

  return (
    <div className="grid gap-12 px-4 py-6 md:gap-16 md:px-6 lg:py-12 xl:gap-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
          Last updated: January 1, 2024
        </p>
      </div>
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">Introduction</h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            Lorem ipsum
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            Acceptance of Terms
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            By using Avan, you agree to be bound by these Terms. If you do not
            agree to these Terms, you may not use Avan.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            License to Use
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            Subject to your compliance with these Terms, Vercel grants you a
            limited, non-exclusive, non-transferable, non-sublicensable license
            to access and use Avan for your personal or internal business
            purposes.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            Restrictions on Use
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            You may not: (a) copy, modify, or create derivative works of Avan;
            (b) rent, lease, lend, sell, redistribute, or sublicense Avan; (c)
            decompile, reverse engineer, or attempt to extract the source code
            of Avan; (d) circumvent, disable, or otherwise interfere with
            security-related features of Avan.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            Disclaimer of Warranties
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            Avan is provided "as is" and "as available" without warranties of
            any kind, whether express or implied. To the fullest extent
            permitted by law, Vercel disclaims all warranties, including, but
            not limited to, the warranty of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            Limitation of Liability
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            In no event shall Vercel be liable for any indirect, incidental,
            special, consequential, or punitive damages, including, but not
            limited to, damages for loss of profits, revenue, goodwill, use,
            data, or other intangible losses, resulting from: (a) your access to
            or use of Avan; (b) any conduct or content of third parties on Avan;
            (c) any unauthorized access, use, or alteration of your information
            or content.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">Contact Us</h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            If you have any questions about these Terms, please contact us at
            <Link href="#">info@example.com</Link>.{"\n"}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-prose">
        <div className="grid gap-4">
          <Button size="lg" onClick={handleProceed}>
            Proceed
          </Button>
          {showWarning && (
            <div className="flex items-center space-x-2 text-sm">
              <ClockIcon className="w-4 h-4" />
              <span>
                {remainingTime > 0 ? (
                  `You cannot possibly read the entire document that quickly. Please wait ${Math.ceil(
                    remainingTime / 60
                  )} minutes before proceeding.`
                ) : (
                  "You may proceed now by clicking the button."
                )}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
