import * as THREE from "/static/vendor/three.module.js";

const canvas = document.getElementById("hero-ball-scene");

if (canvas) {
    const viewport = canvas.closest(".hero__scene-viewport");
    const stage = canvas.closest(".hero__stage");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const pointer = { x: 0, y: 0 };
    const sceneState = {
        compact: false,
        reduced: prefersReducedMotion.matches,
        width: 0,
        height: 0,
        pixelRatio: 1.4,
    };

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x05203c, 8, 24);

    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);

    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);

    const ambient = new THREE.AmbientLight(0xf6fbff, 1.16);
    const hemisphere = new THREE.HemisphereLight(0xbde9ff, 0x031221, 1.02);
    const keyLight = new THREE.PointLight(0xdff5ff, 64, 30, 2);
    keyLight.position.set(0, 5.2, 5.8);
    const rimLight = new THREE.PointLight(0x009fe3, 62, 24, 2);
    rimLight.position.set(-5.4, 1.2, 3.4);
    const backLight = new THREE.PointLight(0x8fd6ff, 44, 20, 2);
    backLight.position.set(4.6, 1.8, -3.2);
    scene.add(ambient, hemisphere, keyLight, rimLight, backLight);

    const makeFieldTexture = () => {
        const surface = document.createElement("canvas");
        surface.width = 1024;
        surface.height = 768;
        const ctx = surface.getContext("2d");

        ctx.fillStyle = "#0c6037";
        ctx.fillRect(0, 0, surface.width, surface.height);

        for (let index = 0; index < 14; index += 1) {
            ctx.fillStyle = index % 2 === 0 ? "#0a5b35" : "#0f6f3f";
            ctx.fillRect((surface.width / 14) * index, 0, surface.width / 14, surface.height);
        }

        ctx.strokeStyle = "rgba(236, 247, 255, 0.92)";
        ctx.lineWidth = 10;
        ctx.strokeRect(32, 32, surface.width - 64, surface.height - 64);
        ctx.beginPath();
        ctx.moveTo(surface.width / 2, 32);
        ctx.lineTo(surface.width / 2, surface.height - 32);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(surface.width / 2, surface.height / 2, 94, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeRect(32, 206, 150, 356);
        ctx.strokeRect(surface.width - 182, 206, 150, 356);
        ctx.strokeRect(32, 276, 62, 216);
        ctx.strokeRect(surface.width - 94, 276, 62, 216);

        const texture = new THREE.CanvasTexture(surface);
        texture.anisotropy = 8;
        return texture;
    };

    const makeBallTexture = () => {
        const surface = document.createElement("canvas");
        surface.width = 1024;
        surface.height = 1024;
        const ctx = surface.getContext("2d");
        const gradient = ctx.createRadialGradient(340, 280, 120, 512, 512, 620);
        gradient.addColorStop(0, "#ffffff");
        gradient.addColorStop(0.55, "#f4f8fd");
        gradient.addColorStop(1, "#d7e0ea");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, surface.width, surface.height);

        for (let index = 0; index < 1400; index += 1) {
            const x = Math.random() * surface.width;
            const y = Math.random() * surface.height;
            const alpha = 0.01 + Math.random() * 0.025;
            ctx.fillStyle = `rgba(120, 138, 158, ${alpha})`;
            ctx.fillRect(x, y, 2, 2);
        }

        ctx.strokeStyle = "rgba(92, 110, 131, 0.08)";
        ctx.lineWidth = 18;
        ctx.beginPath();
        ctx.arc(surface.width / 2, surface.height / 2, 360, 0, Math.PI * 2);
        ctx.stroke();

        const texture = new THREE.CanvasTexture(surface);
        texture.anisotropy = 8;
        return texture;
    };

    const readScoreboardData = () => {
        const scoreDigits = Array.from(document.querySelectorAll(".hero-scoreboard__team strong")).map((node) => node.textContent.trim());
        return {
            home: scoreDigits[0] || "1",
            away: scoreDigits[1] || "0",
            label: document.querySelector(".hero-scoreboard__head small")?.textContent.trim() || "Газпром Арена",
            title: document.querySelector(".hero-scoreboard__head .pill")?.textContent.trim() || "Матч",
        };
    };

    const makeScoreboardTexture = () => {
        const { home, away, label, title } = readScoreboardData();
        const surface = document.createElement("canvas");
        surface.width = 1024;
        surface.height = 512;
        const ctx = surface.getContext("2d");

        const gradient = ctx.createLinearGradient(0, 0, surface.width, surface.height);
        gradient.addColorStop(0, "#0b315d");
        gradient.addColorStop(1, "#1b86c0");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, surface.width, surface.height);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.24)";
        ctx.lineWidth = 6;
        ctx.strokeRect(24, 24, surface.width - 48, surface.height - 48);

        ctx.fillStyle = "rgba(191, 232, 255, 0.94)";
        ctx.font = "700 34px Exo 2";
        ctx.fillText(title.toUpperCase(), 64, 84);

        ctx.fillStyle = "#ffffff";
        ctx.font = "800 168px Exo 2";
        ctx.fillText(home, 248, 310);
        ctx.fillText(away, 650, 310);

        ctx.fillStyle = "rgba(255, 255, 255, 0.82)";
        ctx.font = "700 38px Exo 2";
        ctx.fillText(":", 493, 296);
        ctx.fillText(label.toUpperCase(), 64, 430);

        const texture = new THREE.CanvasTexture(surface);
        texture.anisotropy = 8;
        return texture;
    };

    const fieldTexture = makeFieldTexture();
    const ballTexture = makeBallTexture();
    const scoreboardTexture = makeScoreboardTexture();

    const stadium = new THREE.Group();
    stadium.position.y = -0.4;
    scene.add(stadium);

    const pitch = new THREE.Mesh(
        new THREE.PlaneGeometry(11.8, 7.2),
        new THREE.MeshStandardMaterial({
            map: fieldTexture,
            roughness: 0.95,
            metalness: 0.03,
        })
    );
    pitch.rotation.x = -Math.PI / 2;
    pitch.position.y = -1.66;
    stadium.add(pitch);

    const pitchGlow = new THREE.Mesh(
        new THREE.CircleGeometry(3.2, 64),
        new THREE.MeshBasicMaterial({
            color: 0x009fe3,
            transparent: true,
            opacity: 0.06,
            side: THREE.DoubleSide,
        })
    );
    pitchGlow.rotation.x = -Math.PI / 2;
    pitchGlow.position.y = -1.64;
    stadium.add(pitchGlow);

    const centerRing = new THREE.Mesh(
        new THREE.RingGeometry(0.88, 1.02, 64),
        new THREE.MeshBasicMaterial({
            color: 0xbde9ff,
            transparent: true,
            opacity: 0.16,
            side: THREE.DoubleSide,
        })
    );
    centerRing.rotation.x = -Math.PI / 2;
    centerRing.position.y = -1.63;
    stadium.add(centerRing);

    const lowerBowl = new THREE.Mesh(
        new THREE.CylinderGeometry(5.08, 6.22, 1.72, 80, 1, true),
        new THREE.MeshPhysicalMaterial({
            color: 0x102945,
            roughness: 0.46,
            metalness: 0.26,
            transparent: true,
            opacity: 0.78,
            side: THREE.DoubleSide,
        })
    );
    lowerBowl.position.y = -0.36;
    stadium.add(lowerBowl);

    const upperBowl = new THREE.Mesh(
        new THREE.CylinderGeometry(4.44, 5.68, 1.08, 80, 1, true),
        new THREE.MeshPhysicalMaterial({
            color: 0x0d2038,
            roughness: 0.42,
            metalness: 0.3,
            transparent: true,
            opacity: 0.84,
            side: THREE.DoubleSide,
        })
    );
    upperBowl.position.y = 0.7;
    stadium.add(upperBowl);

    const roofRing = new THREE.Mesh(
        new THREE.TorusGeometry(5.64, 0.09, 16, 160),
        new THREE.MeshBasicMaterial({
            color: 0xbde9ff,
            transparent: true,
            opacity: 0.26,
        })
    );
    roofRing.rotation.x = Math.PI / 2;
    roofRing.position.y = 1.38;
    stadium.add(roofRing);

    const fasciaRing = new THREE.Mesh(
        new THREE.TorusGeometry(4.86, 0.05, 16, 160),
        new THREE.MeshBasicMaterial({
            color: 0x009fe3,
            transparent: true,
            opacity: 0.12,
        })
    );
    fasciaRing.rotation.x = Math.PI / 2;
    fasciaRing.position.y = 0.3;
    stadium.add(fasciaRing);

    const roofHalo = new THREE.Mesh(
        new THREE.TorusGeometry(5.9, 0.18, 20, 180),
        new THREE.MeshBasicMaterial({
            color: 0xbde9ff,
            transparent: true,
            opacity: 0.03,
        })
    );
    roofHalo.rotation.x = Math.PI / 2;
    roofHalo.position.y = 1.52;
    stadium.add(roofHalo);

    const roofStruts = new THREE.Group();
    for (let index = 0; index < 18; index += 1) {
        const angle = (Math.PI * 2 * index) / 18;
        const strut = new THREE.Mesh(
            new THREE.BoxGeometry(0.05, 1.48, 0.05),
            new THREE.MeshStandardMaterial({ color: 0xcfeeff, metalness: 0.7, roughness: 0.24 })
        );
        strut.position.set(Math.cos(angle) * 5.06, 1.26, Math.sin(angle) * 2.96);
        strut.rotation.z = Math.cos(angle) * 0.1;
        roofStruts.add(strut);
    }
    stadium.add(roofStruts);

    const scorePanel = new THREE.Mesh(
        new THREE.PlaneGeometry(2.45, 1.22),
        new THREE.MeshBasicMaterial({
            map: scoreboardTexture,
            transparent: true,
        })
    );
    scorePanel.position.set(0, 0.92, -4.48);
    stadium.add(scorePanel);

    const scoreFrame = new THREE.Mesh(
        new THREE.BoxGeometry(2.72, 1.5, 0.12),
        new THREE.MeshPhysicalMaterial({
            color: 0x16375d,
            metalness: 0.4,
            roughness: 0.32,
            transparent: true,
            opacity: 0.82,
        })
    );
    scoreFrame.position.set(0, 0.92, -4.56);
    stadium.add(scoreFrame);

    const createBeam = (x, z) => {
        const beam = new THREE.Mesh(
            new THREE.ConeGeometry(0.72, 4.8, 28, 1, true),
            new THREE.MeshBasicMaterial({
                color: 0xbde9ff,
                transparent: true,
                opacity: 0.028,
                depthWrite: false,
                side: THREE.DoubleSide,
            })
        );
        beam.position.set(x, 2.8, z);
        beam.rotation.x = Math.PI;
        return beam;
    };

    const beams = [
        createBeam(-3.56, -1.82),
        createBeam(3.56, -1.82),
        createBeam(-3.56, 1.82),
        createBeam(3.56, 1.82),
    ];
    beams.forEach((beam) => stadium.add(beam));

    const floodlights = new THREE.Group();
    for (let index = 0; index < 4; index += 1) {
        const angle = (Math.PI / 2) * index + Math.PI / 4;
        const x = Math.cos(angle) * 4.84;
        const z = Math.sin(angle) * 2.88;
        const mast = new THREE.Mesh(
            new THREE.BoxGeometry(0.08, 1.48, 0.08),
            new THREE.MeshStandardMaterial({
                color: 0xe6f7ff,
                metalness: 0.72,
                roughness: 0.24,
            })
        );
        mast.position.set(x, 2.0, z);
        const lamp = new THREE.Mesh(
            new THREE.BoxGeometry(0.92, 0.14, 0.22),
            new THREE.MeshStandardMaterial({
                color: 0xf4fbff,
                emissive: 0xbde9ff,
                emissiveIntensity: 1.5,
            })
        );
        lamp.position.set(x, 2.76, z);
        floodlights.add(mast, lamp);
    }
    stadium.add(floodlights);

    const ballRig = new THREE.Group();
    const ball = new THREE.Mesh(
        new THREE.SphereGeometry(0.44, 72, 72),
        new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            map: ballTexture,
            roughness: 0.56,
            metalness: 0.08,
            clearcoat: 0.64,
            clearcoatRoughness: 0.28,
        })
    );
    ballRig.add(ball);

    const panelMaterial = new THREE.MeshStandardMaterial({
        color: 0x131a23,
        roughness: 0.82,
        metalness: 0.04,
    });
    const panelGeometry = new THREE.CylinderGeometry(0.115, 0.115, 0.018, 5);
    const panelGroup = new THREE.Group();
    const panelNormals = [];
    const icosahedron = new THREE.IcosahedronGeometry(1, 0);
    const sourcePositions = icosahedron.getAttribute("position");
    for (let index = 0; index < sourcePositions.count; index += 1) {
        const normal = new THREE.Vector3().fromBufferAttribute(sourcePositions, index).normalize();
        const exists = panelNormals.some((entry) => entry.distanceToSquared(normal) < 0.0001);
        if (!exists) {
            panelNormals.push(normal);
        }
    }
    panelNormals.forEach((normal, index) => {
        const panel = new THREE.Mesh(panelGeometry, panelMaterial);
        panel.position.copy(normal).multiplyScalar(0.494);
        panel.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
        panel.rotateY(index * 0.2);
        panelGroup.add(panel);
    });
    ballRig.add(panelGroup);
    scene.add(ballRig);

    const ballShadow = new THREE.Mesh(
        new THREE.CircleGeometry(0.52, 40),
        new THREE.MeshBasicMaterial({
            color: 0x021221,
            transparent: true,
            opacity: 0.28,
        })
    );
    ballShadow.rotation.x = -Math.PI / 2;
    ballShadow.position.y = -1.648;
    scene.add(ballShadow);

    const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(8.4, 40, 24),
        new THREE.MeshBasicMaterial({
            color: 0xbde9ff,
            transparent: true,
            opacity: 0.018,
            side: THREE.BackSide,
        })
    );
    scene.add(atmosphere);

    const createParticleCloud = () => {
        const geometry = new THREE.BufferGeometry();
        const count = 64;
        const positions = new Float32Array(count * 3);
        for (let index = 0; index < count; index += 1) {
            positions[index * 3] = (Math.random() - 0.5) * 11.5;
            positions[index * 3 + 1] = Math.random() * 5.8 - 1.4;
            positions[index * 3 + 2] = (Math.random() - 0.5) * 10.2;
        }
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        return new THREE.Points(
            geometry,
            new THREE.PointsMaterial({
                size: 0.026,
                color: 0xbde9ff,
                transparent: true,
                opacity: 0.12,
            })
        );
    };

    const particles = createParticleCloud();
    scene.add(particles);

    const onPointerMove = (event) => {
        if (coarsePointer.matches) {
            return;
        }
        const bounds = canvas.getBoundingClientRect();
        pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        pointer.y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    };

    const applyLayout = () => {
        const width = viewport?.clientWidth || stage?.clientWidth || canvas.clientWidth || 1;
        const height = viewport?.clientHeight || stage?.clientHeight || canvas.clientHeight || 1;
        sceneState.width = width;
        sceneState.height = height;
        sceneState.compact = width < 820;
        sceneState.pixelRatio = Math.min(window.devicePixelRatio, sceneState.compact ? 1.05 : 1.18);

        renderer.setPixelRatio(sceneState.pixelRatio);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.fov = sceneState.compact ? 38 : width > 1100 ? 28 : 31;
        camera.updateProjectionMatrix();

        const compactScale = sceneState.compact ? 0.92 : width > 1120 ? 1.08 : 1.02;
        stadium.scale.setScalar(compactScale);
        stadium.position.x = sceneState.compact ? 0 : 0.08;
        stadium.position.y = sceneState.compact ? -0.58 : -0.34;

        ballRig.position.set(sceneState.compact ? 0.4 : 0.62, -1.24, 1.08);
        ballShadow.position.set(sceneState.compact ? 0.4 : 0.62, -1.648, 1.08);

        camera.position.set(sceneState.compact ? 0 : 0.1, sceneState.compact ? 1.4 : 1.18, sceneState.compact ? 8.3 : 7.25);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", applyLayout);
    prefersReducedMotion.addEventListener("change", (event) => {
        sceneState.reduced = event.matches;
    });

    if (window.ResizeObserver && (viewport || stage)) {
        const observer = new ResizeObserver(() => applyLayout());
        observer.observe(viewport || stage);
    }

    applyLayout();

    const clock = new THREE.Clock();

    const render = () => {
        const elapsed = clock.getElapsedTime();
        const motionFactor = sceneState.reduced ? 0.2 : 1;

        ball.rotation.y = elapsed * 0.22 * motionFactor;
        ball.rotation.x = 0.04 + Math.sin(elapsed * 0.36) * 0.014 * motionFactor;
        ballRig.position.y = -1.24 + Math.sin(elapsed * 1.1) * 0.014 * motionFactor;
        ballShadow.scale.setScalar(1 - Math.sin(elapsed * 1.1) * 0.025 * motionFactor);
        ballShadow.material.opacity = 0.26 - Math.sin(elapsed * 1.1) * 0.02 * motionFactor;

        centerRing.scale.setScalar(1 + Math.sin(elapsed * 0.9) * 0.02 * motionFactor);
        centerRing.material.opacity = 0.12 + Math.sin(elapsed * 0.9) * 0.02 * motionFactor;
        pitchGlow.material.opacity = 0.04 + Math.sin(elapsed * 0.8) * 0.01 * motionFactor;

        roofRing.rotation.z = elapsed * 0.006 * motionFactor;
        fasciaRing.rotation.z = -elapsed * 0.008 * motionFactor;
        roofHalo.rotation.z = elapsed * 0.004 * motionFactor;

        beams.forEach((beam, index) => {
            beam.material.opacity = 0.018 + Math.sin(elapsed * 1.2 + index) * 0.01 * motionFactor;
        });

        floodlights.rotation.y = elapsed * 0.008 * motionFactor;
        particles.rotation.y = elapsed * 0.004 * motionFactor;
        atmosphere.rotation.y = elapsed * 0.003 * motionFactor;

        const targetX = sceneState.compact ? pointer.x * 0.08 : pointer.x * 0.22;
        const targetY = sceneState.compact ? 1.32 - pointer.y * 0.05 : 1.16 - pointer.y * 0.08;
        const targetZ = sceneState.compact ? 8.16 + Math.sin(elapsed * 0.2) * 0.04 * motionFactor : 7.22 + Math.sin(elapsed * 0.22) * 0.06 * motionFactor;

        camera.position.x += (targetX - camera.position.x) * 0.03;
        camera.position.y += (targetY - camera.position.y) * 0.03;
        camera.position.z += (targetZ - camera.position.z) * 0.03;
        camera.lookAt(0.02, -1.2, 0.22);

        renderer.render(scene, camera);
        window.requestAnimationFrame(render);
    };

    render();
}
