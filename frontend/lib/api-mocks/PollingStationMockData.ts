import { PollingStation } from "@kiesraad/api";

export const pollingStationMockData: PollingStation = {
  id: 1,
  election_id: 1,
  name: "Op Rolletjes",
  number: 33,
  number_of_voters: undefined,
  polling_station_type: "Mobile",
  street: "Rijksweg A12",
  house_number: "1",
  house_number_addition: undefined,
  postal_code: "1234 YQ",
  locality: "Den Haag",
};

export const getPollingStationMockData = (election_id: number): PollingStation[] => {
  if (election_id === 3) {
    return [];
  }

  const offset = (election_id - 1) * 10;
  return [
    { ...pollingStationMockData, id: offset + 1, election_id },
    {
      id: offset + 2,
      election_id,
      name: "Testplek",
      number: 34,
      number_of_voters: 1000,
      polling_station_type: "Special",
      street: "Teststraat",
      house_number: "2",
      house_number_addition: "b",
      postal_code: "1234 QY",
      locality: "Testdorp",
    },
  ];
};
