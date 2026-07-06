import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        
        {/* Grid upto 5: lg:grid-cols-5 */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          
          <FooterColumn
            title="Product"
            links={[
              "Features",
              "Pricing",
              "Dashboard",
              "Integrations",
            ]}
          />

          {/* <FooterColumn
            title="Resources"
            links={[
              "Docs",
              "Guides",
              "API",
              "Support",
            ]}
          /> */}

          <FooterColumn
            title="Legal"
            links={[
              "Privacy Policy",
              "Terms of Service",
              "Cookies",
            ]}
          />

          <FooterColumn
            title="Socials"
            links={[
              "Twitter",
              "Discord",
              "Telegram",
              "GitHub",
            ]}
          />

          {/* <div>
            <h4 className="text-sm font-semibold text-foreground">
              Newsletter
            </h4>

            <p className="mt-4 text-sm text-muted-foreground">
              Get updates on new features and Telegram commerce insights.
            </p>

            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-l-xl
                  border
                  border-border/60
                  bg-background
                  px-4
                  py-2
                  text-sm
                  outline-none
                  focus:border-primary
                "
              />

              <button
                className="
                  rounded-r-xl
                  bg-primary
                  px-4
                  text-sm
                  text-primary-foreground
                  hover:opacity-90
                  transition
                "
              >
                Join
              </button>
            </div>
          </div> */}
                    
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border/40 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SwiftSell. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-foreground transition">Privacy</span>
            <span className="hover:text-foreground transition">Terms</span>
            <span className="hover:text-foreground transition">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
