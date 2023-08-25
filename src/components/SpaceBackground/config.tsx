import { ISourceOptions } from "tsparticles-engine";
import red from "../../assets/images/amongus-red.png"

export const config: ISourceOptions = {
    fullScreen: {
        enable: true,
    },
    fpsLimit: 60,
    particles: {
        groups: {
            z5000: {
                number: {
                    value: 10,
                },
                zIndex: {
                    value: 5000,
                },
            },
            z10: {
                number: {
                    value: 5,
                },
                zIndex: {
                    value: 10,
                },
            },
        },
        number: {
            value: 40,
            density: {
                enable: false,
                value_area: 100,
            },
        },
        color: {
            value: "#fff",
            animation: {
                enable: false,
                speed: 20,
                sync: true,
            },
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 1,
            random: false,
            animation: {
                enable: false,
                speed: 3,
                minimumValue: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
        },
        links: {
            enable: false,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            angle: {
                value: 10,
                offset: 0,
            },
            enable: true,
            speed: 2,
            direction: "right",
            random: false,
            straight: true,
            outModes: {
                default: "out",
            },
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
        zIndex: {
            value: 5,
            opacityRate: 0.5,
        },
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: false,
                mode: "repulse",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
            },
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 4,
                groups: ["z5000", "z7500", "z2500", "z1000"],
            },
            remove: {
                quantity: 2,
            },
        },
    },
    detectRetina: true,
    // background: {
    //     color: "#000000",
    //     image: "",
    //     position: "50% 50%",
    //     repeat: "no-repeat",
    //     size: "cover",
    // },
    emitters: {
        position: {
            y: 55,
            x: -30,
        },
        rate: {
            delay: 7,
            quantity: 1,
        },
        size: {
            width: 0,
            height: 0,
        },
        particles: {
            shape: {
                type: "images",
                options: {
                    images: [
                        {
                            src: red,
                        },
                    ],
                },
            },
            size: {
                value: 10,
            },

            move: {
                speed: 10,
                outModes: {
                    default: "destroy",
                    left: "none",
                },
                direction: "none",
            },
            zIndex: {
                value: 0,
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360,
                },
                animation: {
                    enable: true,
                    speed: 10,
                    sync: true,
                },
            },
        },
    },
};