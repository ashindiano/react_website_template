import { apiService } from "../../../_services";

export const getCities = () => {
  return apiService
    .get(
      "https://dev.purtainet.com/khaam/visitor_api/get_cities?format=json",
      null,
      true
    )
    .then((x) => {
      var processed = {};
      x.data.content.Data.city_list.forEach(
        (city) => (processed[city.code] = city.city_name)
      );
      return processed;
    });
};
