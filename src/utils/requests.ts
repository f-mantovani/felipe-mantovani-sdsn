import axios from "axios";
import { Goals } from "../types";

export const goalsRequest = () =>
  axios.get<Goals[]>(
    `https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false`,
  );

export const goalRequest = (id: string) =>
  axios.get<Goals[]>(
    `https://unstats.un.org/SDGAPI/v1/sdg/Goal/${id}/Target/List?includechildren=false`,
  );

export const fetchCountryResults = (country: string, id: string) =>
  axios.get(
    `https://services7.arcgis.com/IyvyFk20mB7Wpc95/arcgis/rest/services/Sustainable_Development_Report_2023_(GOAL_DATA_ONLY)/FeatureServer/0/query?where=Name%20%3D%20'${country}'&outFields=Goal_${id}_Rating,Goal_${id}_Trend,ID,Name,Goal_${id}_Score,Region&outSR=4326&f=json`,
  );
