import BoardMember from '@/components/BoardMember';
import OurTeamCarousel from '@/components/OurTeamCarousel';
import { BoardMemberI, OurTeam } from '@/interfaces';
import { GetServerSideProps, NextPage } from 'next';

interface OurTeamPageProps {
  dataOurTeam: OurTeam[];
  dataBoardMembers: BoardMemberI[];
}

const OurTeamPage: NextPage<OurTeamPageProps> = ({ dataOurTeam, dataBoardMembers }) => {
  return (
    <>
      <div className="container our-team">
        <div className="row text-center our-team__title">
          <div className="col">
            <h1>
              Запознајте го
              <br />
              Нашиот Тим
            </h1>
          </div>
        </div>
        <div className="row our-team_carousel-box">
          <div className="col">
            <OurTeamCarousel dataOurTeam={dataOurTeam} />
          </div>
        </div>
      </div>
      <div className="container-fluid our-team_board-members">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Членови на Управниот Одбор</h1>
          </div>
        </div>
        {dataBoardMembers.map((boardMemberData) => {
          return <BoardMember boardMember={boardMemberData} key={boardMemberData.id} />;
        })}
      </div>
    </>
  );
};

export default OurTeamPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const resOurTeam = await fetch('https://krik-db.vercel.app/our-team?position=team-member');
  const dataOurTeam: OurTeam[] = await resOurTeam.json();

  const resBoardMembers = await fetch('https://krik-db.vercel.app/our-team?position=board-member');
  const dataBoardMembers: BoardMemberI[] = await resBoardMembers.json();

  return {
    props: {
      dataOurTeam,
      dataBoardMembers,
    },
  };
};
