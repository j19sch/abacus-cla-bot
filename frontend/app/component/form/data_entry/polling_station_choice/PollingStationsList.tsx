import { useNavigate } from "react-router-dom";

import { PollingStation, useElectionStatus } from "@kiesraad/api";
import { IconChevronRight } from "@kiesraad/icon";
import { Badge } from "@kiesraad/ui";

export interface PollingStationsListProps {
  pollingStations: PollingStation[];
}

export function PollingStationsList({ pollingStations }: PollingStationsListProps) {
  const electionStatus = useElectionStatus();
  const navigate = useNavigate();

  const handleRowClick = (pollingStationId: number) => () => {
    navigate(`./${pollingStationId}/recounted`);
  };

  return (
    <table id="polling_station_list" className="overview_table">
      <thead>
        <tr>
          <th className="align-center">Nummer</th>
          <th>Stembureau</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pollingStations.map((pollingStation: PollingStation) => {
          const pollingStationStatus = electionStatus.statuses.find((status) => status.id === pollingStation.id);
          return (
            <tr onClick={handleRowClick(pollingStation.id)} key={pollingStation.number}>
              <td width="6.5rem" className="number">
                {pollingStation.number}
              </td>
              <td>
                <span>{pollingStation.name}</span>
                {pollingStationStatus && <Badge type={pollingStationStatus.status} />}
              </td>
              <td width="5rem">
                <div className="link">
                  <IconChevronRight />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}