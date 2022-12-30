import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getPlayers } from "~/services/players.server";
import type {Player} from "~/services/players.server";
import Table  from "~/components/Table";
import type {TableRowType} from "~/components/Table";
import TopNav from "~/components/TopNav";
import Layout from "~/components/Layout";

type PlayersDataType = {
  players: Player[]
}

export const loader: LoaderFunction = async () => {
  const data: PlayersDataType = { players : await getPlayers()};

  return json(data);
}

export default function Players() {
  const {players} = useLoaderData<PlayersDataType>();

  const headers: String[]  = ['Player', 'Position', 'Team', 'Height', 'Weight', ];
  const records: TableRowType[] = players.map( player => {

    return {
      avatar: player.avatar,
      columns: [
        `${player.firstName} ${player.lastName}`,
        player.position,
        player.team,
        player.height,
        player.weight
      ]
    }
  })

  return (  <div className="flex flex-col m-4 ">
                <h1 className="font-prompt text-2xl font-bold">
                    Players Profile
                </h1>
                <Table headers={headers} records={records}/>
                <Outlet/>
            </div> );
}
