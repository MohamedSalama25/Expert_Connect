import { env } from './config/env.js';
import app from './app.js';
import prisma from './config/prisma.js';

const PORT = env.PORT || 5000;

const startServer = async () => {
    try {
        // Basic DB connection check
        await prisma.$connect();
        console.log('✅ Connected to database');

        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
            console.log(`Mode: ${env.NODE_ENV}`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
