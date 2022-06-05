import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type IncidentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Incident {
  readonly id: string;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly location?: string | null;
  readonly incidentType?: string | null;
  readonly harm?: boolean | null;
  readonly individuals?: string | null;
  readonly eventType?: string | null;
  readonly effects?: boolean | null;
  readonly patientSSN?: string | null;
  readonly patientPhone?: string | null;
  readonly patientAddress?: string | null;
  readonly patientName?: string | null;
  readonly witness1Name?: string | null;
  readonly witness1Phone?: string | null;
  readonly witness2Name?: string | null;
  readonly witness2Phone?: string | null;
  readonly witness3Name?: string | null;
  readonly witness3Phone?: string | null;
  readonly department?: string | null;
  readonly description?: string | null;
  readonly prevention?: string | null;
  readonly command?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Incident, IncidentMetaData>);
  static copyOf(source: Incident, mutator: (draft: MutableModel<Incident, IncidentMetaData>) => MutableModel<Incident, IncidentMetaData> | void): Incident;
}