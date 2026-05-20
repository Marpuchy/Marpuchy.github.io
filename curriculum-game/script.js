const translations = {
    es: {
        pageTitle: "Currículum | Marc Ibáñez",
        metaDescription: "Currículum de Marc Ibáñez, perfil de atención al cliente y tecnología.",
        hero: {
            eyebrow: "Currículum Vitae",
            title: "Atención al cliente | Tecnología | Aprendizaje rápido",
            summary: "Perfil responsable, educado y orientado al trato cara al público. Cuento con formación tecnológica, facilidad para aprender procesos nuevos, buena comunicación y disponibilidad para desplazarme gracias al permiso de conducir y vehículo propio."
        },
        sections: {
            experience: "Experiencia",
            strengths: "Aptitudes",
            education: "Formación",
            languages: "Idiomas",
            additional: "Datos adicionales",
            contact: "Contacto"
        },
        experience: {
            ntt: {
                period: "Prácticas FCT | Marzo 2025 - Mayo 2025",
                description: "Experiencia en entorno profesional corporativo, trabajando con herramientas tecnológicas, comunicación de equipo y cumplimiento de tareas. Reforcé mi organización, responsabilidad y capacidad de adaptación."
            }
        },
        strengths: {
            customer: {
                title: "Trato cara al público",
                type: "Comunicación clara",
                description: "Atención correcta, cercana y paciente, con capacidad para escuchar necesidades, resolver dudas y explicar opciones de forma sencilla."
            },
            learning: {
                title: "Aprendizaje y responsabilidad",
                type: "Organización y puntualidad",
                description: "Buena disposición para aprender procedimientos, mantener orden en el trabajo y adaptarme a tareas distintas durante la jornada."
            },
            tech: {
                title: "Tecnología y producto",
                type: "Interés personal",
                description: "Conocimiento e interés por tecnología, productos de entretenimiento digital, hardware, accesorios y novedades del sector."
            }
        },
        education: {
            daw: "CFGS Desarrollo de Aplicaciones Web (DAW) | 2023 - 2025",
            specialization: "Curso de Especialización Tecnológica | 2025 - Actualidad",
            bachillerato: "Bachillerato Científico-Técnico | 2021 - 2023"
        },
        languages: {
            spanish: "Español: nativo",
            english: "Inglés: C1 Cambridge"
        },
        additional: {
            license: "Permiso de conducir y vehículo propio",
            customer: "Trato correcto cara al público",
            profile: "Perfil responsable, amable y ordenado"
        }
    },
    en: {
        pageTitle: "Resume | Marc Ibáñez",
        metaDescription: "Resume of Marc Ibáñez, customer service and technology profile.",
        hero: {
            eyebrow: "Resume",
            title: "Customer Service | Technology | Fast Learning",
            summary: "Responsible, polite profile focused on public-facing service. I have technology training, ease learning new processes, clear communication and availability to commute thanks to my driver's license and own vehicle."
        },
        sections: {
            experience: "Experience",
            strengths: "Strengths",
            education: "Education",
            languages: "Languages",
            additional: "Additional Details",
            contact: "Contact"
        },
        experience: {
            ntt: {
                period: "FCT Internship | March 2025 - May 2025",
                description: "Experience in a professional corporate environment, working with technology tools, team communication and task completion. I strengthened my organization, responsibility and adaptability."
            }
        },
        strengths: {
            customer: {
                title: "Public-facing Service",
                type: "Clear communication",
                description: "Correct, approachable and patient attention, with the ability to listen to needs, answer questions and explain options simply."
            },
            learning: {
                title: "Learning and Responsibility",
                type: "Organization and punctuality",
                description: "Good willingness to learn procedures, keep work organized and adapt to different tasks during the day."
            },
            tech: {
                title: "Technology and Product",
                type: "Personal interest",
                description: "Knowledge and interest in technology, digital entertainment products, hardware, accessories and sector news."
            }
        },
        education: {
            daw: "Higher Vocational Diploma in Web Application Development (DAW) | 2023 - 2025",
            specialization: "Technology Specialization Course | 2025 - Present",
            bachillerato: "Scientific-Technological Baccalaureate | 2021 - 2023"
        },
        languages: {
            spanish: "Spanish: native",
            english: "English: C1 Cambridge"
        },
        additional: {
            license: "Driver's license and own vehicle",
            customer: "Correct public-facing service",
            profile: "Responsible, friendly and organized profile"
        }
    }
};

function getTranslationValue(language, key) {
    return key.split(".").reduce((value, segment) => {
        if (value && Object.prototype.hasOwnProperty.call(value, segment)) {
            return value[segment];
        }
        return undefined;
    }, translations[language]);
}

function applyLanguage(language) {
    const selectedLanguage = translations[language] ? language : "en";
    const metaDescription = document.querySelector('meta[name="description"]');

    document.documentElement.lang = selectedLanguage;
    document.title = translations[selectedLanguage].pageTitle;

    if (metaDescription) {
        metaDescription.setAttribute("content", translations[selectedLanguage].metaDescription);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const translatedText = getTranslationValue(selectedLanguage, element.dataset.i18n);

        if (typeof translatedText === "string") {
            element.textContent = translatedText;
        }
    });

    document.querySelectorAll(".language-button").forEach((button) => {
        const isActive = button.dataset.lang === selectedLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";

    document.querySelectorAll(".language-button").forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.lang);
        });
    });

    applyLanguage(browserLanguage);
});
