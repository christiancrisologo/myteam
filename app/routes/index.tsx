import React from 'react';

type ColType = {
  label: String,
  value: String,
  className?: String
  type?: String
  grow?: Boolean
}

const AttrBox: React.FC<ColType> = ({label ,value, className = '', type = 'row', grow = false}) => {
  const _type = type === 'row' ? 'flex-row' : 'flex-col';
  const style = grow ? { flexGrow: 1, flexBasis: 0 } : {};

  return (
    <div className={`${grow ? 'block' : 'flex'} p-2 mb-2 xs:mb-0 xs:w-full ${_type} ${className}`} 
      style={style}>
      <div className="text-slate-900 text-sm sm:w-32 w-full">{label}</div>
      <span className="text-gray-400 text-sm ">{value}</span>
    </div>
  )
}

type BadgesBoxType = {
  image: string
  label: string
  className?: string
}

const BadgesBox: React.FC<BadgesBoxType> = ({image, label, className = ''}) => {

  return (
    <div className={`block p-2 m-4 ${className}`}>
      <div className="sm:w-32 w-full">
        <img src={image} alt="badges" className="object-fit w-12 h-12" />
      </div>
      <p className="text-gray-400 text-sm text-center w-16">{label}</p>
    </div>
  )
}


type AttrContainerProps = {
  title: String
}

const AttrContainer: React.FC<AttrContainerProps> = ({children, title}) => {
  return (
    <div className={'block p-4 m-1 mb-2 xs:w-full border border-neutral-100 rounded-md'} style={{ flexGrow: 1, flexBasis: 0 }}>
       <h3 className="text-indigo-900 font-semibold">{title}</h3>
      {children}
    </div>
  )
}

export default function Index(): React.ReactElement {
  return (
      
          <div className="flex flex-col items-center min-w-[240px] ">
            {/* <h1 className='font-prompt text-2xl font-bold text-blue-600 my-2 '>NBA2k MyTeam</h1>
            <h4 className='text-sm text-gray-500'>A simple database of NBA2k22 MyTeam</h4>
            <div className="flex flex-col mx-4 my-4" >
              <Link to="/players">
                <button className="w-56 my-2 bg-white transition duration-150 ease-in-out rounded text-gray-800 border border-gray-300 px-6 py-2 text-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-800" data-ripple-light="true">
                  Players
                </button>
              </Link>
            </div> */}
            <div className="flex xs:flex-col flex-col md:flex-row m-2 xs:m-1 w-full h-full">
              <div className="md:w-[25%] w-full">
                <div className="xs:w-full sm:w-full min-w-fit p-1 sm:p-1 md:p-4 bg-white rounded-md shadow-md hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                  <img src="https://2kdb.net/storage/players/2k22/giannis_antetokounmpo_61710.jpg" alt="avatar" className="object-cover rounded-t-md" />
                </div>
              </div>
              <div className="xs:flex-col xs:w-full sm:flex-col sm:w-full md:w-[75%] bg-slate-100 rounded-md shadow-md p-4 overflow-auto" >
                <div className="text-lg font-semibold md:text-3xl mb-2 flex">
                  <div className="text-white bg-purple-900 p-2 rounded-sm text-sm mr-2 h-9">99</div> <div className="text-purple-700">Giannis Antetokounmpo</div>
                </div>
                
                <div className="flex flex-wrap md:flex-row w-full mb-4" style={{flex: '0 0 auto'}} >
                  <AttrBox label="Position" value="PF/PG" className="bg-green-100" type="col" grow />
                  <AttrBox label="Offense" value="PF/PG" className="bg-emerald-100"type="col"  grow />
                  <AttrBox label="Defense" value="PF/PG" className="bg-emerald-200"type="col" grow />
                  <AttrBox label="Height" value="PF/PG" type="col" grow />
                  <AttrBox label="Weight" value="PF/PG" type="col" grow />
                </div>
               
              </div>
            </div>
            <div className="flex-col w-full bg-slate-100 bg-opacity-25 rounded-md shadow-md p-4" >
              <h2 className="font-semibold my-4 text-indigo-900">Attributes</h2>
              <div className="flex flex-wrap md:flex-row w-full mb-4" style={{flex: '0 0 auto'}} >
                <AttrContainer title="Shooting">
                  <AttrBox label="Driving Layup" value="PF/PG"  />
                  <AttrBox label="Standing Dunk" value="PF/PG" />
                  <AttrBox label="Driving Dunk" value="PF/PG" />
                  <AttrBox label="Post Fade" value="PF/PG"   />
                  <AttrBox label="Post Hook" value="PF/PG" />
                  <AttrBox label="Post Control" value="PF/PG" />
                  <AttrBox label="Draw Foul" value="PF/PG" />
                  <AttrBox label="Close Shot" value="PF/PG" />
                  <AttrBox label="Mid-Range Shot" value="PF/PG" />
                  <AttrBox label="Three-Point Shot" value="PF/PG" />
                  <AttrBox label="Free Throw" value="PF/PG" />
                </AttrContainer>
                <AttrContainer title="Defense">
                  <AttrBox label="Block" value="PF/PG"  />
                  <AttrBox label="Steal" value="PF/PG"   />
                  <AttrBox label="Perimeter Defense" value="PF/PG" />
                  <AttrBox label="Interior Defense" value="PF/PG" />
                  </AttrContainer>
                <AttrContainer title="Rebounding">
                  <AttrBox label="Offensive Rebound" value="PF/PG"  />
                  <AttrBox label="Defensive Rebound" value="PF/PG"   />
                  </AttrContainer>
                <AttrContainer title="Athleticism">
                  <AttrBox label="Speed" value="PF/PG"  />
                  <AttrBox label="Speed With Ball" value="PF/PG"   />
                  <AttrBox label="Acceleration" value="PF/PG"   />
                  <AttrBox label="Vertical" value="PF/PG"   />
                  <AttrBox label="Strength" value="PF/PG"   />
                  <AttrBox label="Stamina" value="PF/PG"   />
                  <AttrBox label="Hustle" value="PF/PG"   />
                  <AttrBox label="Lateral Quickness" value="PF/PG"   />
                  </AttrContainer>
                <AttrContainer title="Mental">
                  <AttrBox label="Pass Perception" value="PF/PG"  />
                  <AttrBox label="Defensive Consistency" value="PF/PG"   />
                  <AttrBox label="Offensive Consistency" value="PF/PG"   />
                  <AttrBox label="Help Defense" value="PF/PG"   />
                  <AttrBox label="Shot IQ" value="PF/PG"   />
                </AttrContainer>
              </div>
            </div>
            <div className="flex-col w-full bg-slate-100 bg-opacity-25 rounded-md shadow-md p-4" >
              <h2 className="font-semibold my-4 text-indigo-900">Badges</h2>
              <div className="flex flex-wrap md:flex-row xs:flex-col w-full mb-4" style={{flex: '0 0 auto'}} >
                <AttrContainer title="Shooting Badges">
                  <div className='flex flex-wrap md:flex-row w-full mb-4' style={{flex: '0 0 auto'}}>
                    <BadgesBox image="https://2kdb.net/storage/assets/badges/blinders_hof.png" label="Blinders something" />
                    <BadgesBox image="https://2kdb.net/storage/assets/badges/blinders_hof.png" label="Blinders" />
                  </div>
                </AttrContainer>
                <AttrContainer title="Playmaking Badges">
                  <BadgesBox image="https://2kdb.net/storage/assets/badges/blinders_hof.png" label="Blinders" />
                </AttrContainer>
                <AttrContainer title="Defensive Badges">
                  <BadgesBox image="https://2kdb.net/storage/assets/badges/blinders_hof.png" label="Blinders" />
                </AttrContainer>
              </div>
            </div>
			    </div>
  );
}
