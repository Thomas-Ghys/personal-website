import { ContactType } from "../../types/ContactType";
import { ContactState } from "./contact-state";

export const getContactOptions = (conctactState: ContactState): ContactType[] => conctactState.contactOptions;