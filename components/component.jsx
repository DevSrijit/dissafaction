"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Component() {
  const [showWarning, setShowWarning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(600);
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
      router.push("/lens");
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
          <h2 className="text-3xl font-bold tracking-tighter">
            1. Introduction
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            1.1 The following terms and conditions (“Terms”) govern the detailed
            historical account of Vincent van Gogh (“Artist”) provided herewith.
            1.2 By accessing this document, you acknowledge your agreement to be
            bound by these Terms, which form a binding contract between you and
            the website provider (“Provider”). Should you disagree with these
            Terms at any point, you are advised not to proceed with accessing
            this document.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            2. Historical Account
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            2.1 Birth and Early Life: The Artist was born on March 30, 1853, in
            Zundert, Netherlands, and concluded his life tragically on July 29,
            1890, in Auvers-sur-Oise, France. 2.2 Career Overview: The Artist’s
            career included phases as an art dealer, a preacher and teacher, and
            finally as a pioneering post-Impressionist painter, renowned for his
            vivid colors and emotional depth.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            3. Professional Development
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            3.1 Initial Employment: The Artist commenced his professional
            journey with Goupil & Cie, which facilitated his stays in London and
            Paris, nurturing his burgeoning interest in art. 3.2 Transition to
            Art: By 1880, the Artist resolved to devote himself to painting, a
            decision substantially supported by his brother, Theo van Gogh. 3.3
            Influential Periods: Post-exposure to Impressionist and
            Neo-Impressionist influences during his Parisian residency from 1886
            to 1888, the Artist’s style underwent significant evolution, marked
            by an expressive brushwork and bold use of colour.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            4. Artistic Contributions and Reiterations
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            4.1 Works Produced: The Artist was prolific, creating approximately
            2,100 artworks, which included around 860 oil paintings and numerous
            sketches and drawings. These works are now celebrated globally. 4.2
            Key Pieces Revisited: Among his notable works are “The Yellow
            House,” “Sunflowers,” “The Bedroom,” and “Starry Night,” each
            epitomizing the Artist’s unique style and emotional intensity. 4.3
            Artistic Style Reaffirmed: Known for his expressive brushwork and
            bold use of colour, the Artist’s style is unmistakable and has been
            influential in the development of modern art.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            5. Health and Wellbeing
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            5.1 Mental Health: Throughout his lifetime, the Artist experienced
            recurrent bouts of mental illness, which profoundly affected his
            social interactions and productivity. This aspect of his life
            reminds us of the human condition and the struggle often inherent in
            the pursuit of artistic expression. 5.2 Asylum Stay: Reflecting his
            commitment to his art, despite his struggles, the Artist voluntarily
            admitted himself to the Saint-Paul-de-Mausole asylum in May 1889,
            where he continued to produce artworks.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            6. Intellectual Property and Attribution
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            6.1 Copyright Details: All works produced by the Artist during his
            lifetime entered the public domain posthumously. Reproduction of
            these works in any form must comply with existing copyright laws to
            honor the Artist’s legacy. 6.2 Attribution and Recognition: Usage of
            the Artist’s works or references to his life must properly
            acknowledge his profound impact on the art world. The Artist
            famously said, “I dream my painting and I paint my dream.”
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            7. Limitation of Liability and Accuracy of Information
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            7.1 Accuracy and Completeness: The Provider does not guarantee the
            complete accuracy, completeness, or timeliness of the information
            provided in this document. 7.2 No Liability: The Provider assumes no
            liability for errors, omissions, or inaccuracies in this document,
            nor for any actions taken based on the information provided herein.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            8. Agreement Duration and Repetition{" "}
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            8.1 Effective Duration: These Terms become effective upon your
            access to this document and will remain in effect until you complete
            reading, unless terminated earlier as specified. 8.2 Provider’s
            Rights: The Provider reserves the right to terminate these Terms at
            any time without notice and to amend the content for clarity and
            further detailed repetition.{" "}
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            9. General Provisions and Redundancy{" "}
          </h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            9.1 Amendment: These Terms may be amended or restated by the
            Provider at any point without notice, and such amendments will be
            binding upon their posting. 9.2 Severability: If any part of these
            Terms is found to be invalid or unenforceable, the remaining
            portions shall continue in full force and effect, reiterating the
            enduring relevance of the Artist&apos's life and works.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
            By continuing to access this document, you affirm that you have
            read, understood, and agree to be bound by the above Terms and
            Conditions. You recognize the importance of revisiting and
            thoroughly understanding Vincent van Gogh's life and legacy.{" "}
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
                {remainingTime > 0
                  ? `You cannot possibly read the entire document that quickly. Please wait ${Math.ceil(
                      remainingTime / 60
                    )} minutes before proceeding.`
                  : "You may proceed now by clicking the button."}
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
