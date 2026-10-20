import { useEffect, useState } from "react";

// Portfolio projects live in a separate public repo so other sites can reuse the same JSON.
// GitHub Pages is the main source; raw.githubusercontent.com is the backup if Pages is down.
export const PORTFOLIO_DATA_URLS = [
    "https://asamshahadat.github.io/myPortfolioDataJson/portfolio.json",
    "https://raw.githubusercontent.com/asamshahadat/myPortfolioDataJson/main/portfolio.json",
];

let cachedProjects = null;
let pendingRequest = null;

const fetchProjects = async () => {
    for (const url of PORTFOLIO_DATA_URLS) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            // Try the next source
        }
    }
    throw new Error("Portfolio data could not be loaded");
};

// Shared across pages: the JSON is fetched once per visit, not on every route change
const loadProjects = () => {
    if (!pendingRequest) {
        pendingRequest = fetchProjects()
            .then((projects) => {
                cachedProjects = projects;
                return projects;
            })
            .catch((error) => {
                pendingRequest = null;
                throw error;
            });
    }
    return pendingRequest;
};

const usePortfolioData = () => {
    const [projects, setProjects] = useState(cachedProjects);
    const [status, setStatus] = useState(cachedProjects ? "ready" : "loading");
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        if (cachedProjects) {
            return undefined;
        }

        let active = true;
        setStatus("loading");
        loadProjects()
            .then((data) => {
                if (active) {
                    setProjects(data);
                    setStatus("ready");
                }
            })
            .catch(() => {
                if (active) {
                    setStatus("error");
                }
            });

        return () => {
            active = false;
        };
    }, [attempt]);

    const retry = () => setAttempt((count) => count + 1);

    return { projects: projects || [], status, retry };
};

export default usePortfolioData;
