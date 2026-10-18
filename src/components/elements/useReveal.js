import { useEffect } from "react";

// Fades in elements marked with the "reveal" class as they scroll into view
const useReveal = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal:not(.is-visible)");

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
        );

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);
};

export default useReveal;
