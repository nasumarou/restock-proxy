export default async function handler(req, res) {
    try {
        const response = await fetch("https://www.gag2.gg/api/stock/predictions");
        const data = await response.json();

        const items = [
            "Dragon's Breath",
            "Moon Bloom",
            "Venom Spitter",
            "Hypno Bloom",
            "Venus Flytrap"
        ];

        const result = {};

        for (const item of items) {
            const entry = data.predictions.find(p => p.name === item);
            result[item] = entry ? entry.timeUntil : "❓ Non trouvé";
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: "Erreur proxy", details: error.toString() });
    }
}
