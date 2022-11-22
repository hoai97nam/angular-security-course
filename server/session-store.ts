import { User } from "../src/app/model/user";
import { Session } from "./session";

export class SessionStore {
    private session: {[key:string]: Session} = {};
    
    createSession(sessionId: string, user: User){
        this.session[sessionId] = new Session(sessionId, user)
    }

    findUserBySessionId(sessionId: string) : User | undefined {
        const session = this.session[sessionId];
        return this.isSessionValid(sessionId) ? session.user : undefined;
    }

    isSessionValid(sessionId: string): boolean {
        const session = this.session[sessionId];
        return session && session.isValid();
    }

    destroySession(sessionId: string) {
        delete this.session[sessionId]
    }
}

export const sessionStore = new SessionStore();
