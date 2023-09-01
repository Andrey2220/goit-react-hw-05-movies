import { Service } from 'api/API';
import useData from 'api/useData';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SectionStyled } from './Cast.styled';
import NoInformation from 'components/NoInformation/NoInformation';

const Cast = () => {
  const { data, getData } = useData(1);

  const { movieId } = useParams();
  useEffect(() => {
    const controller = new AbortController();
    getData(Service.getCast, controller.signal, movieId);
    return () => {
      controller.abort();
    };
  }, [getData, movieId]);

  return (
    <>
      {data?.cast.length === 0 && <NoInformation />}
      {data?.cast.length > 0 && (
        <SectionStyled>
          <ul className="list">
            {data.cast.map(actor => {
              return (
                <li className="item" key={actor.cast_id}>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                        : 'https://nemsmbr.org/wp-content/uploads/2019/11/no-image-icon-md-1.png'
                    }
                    alt=""
                    height={350}
                  />
                  <h3>{actor.name}</h3>
                  <h2>{`Character: ${actor.character}`}</h2>
                </li>
              );
            })}
          </ul>
        </SectionStyled>
      )}
    </>
  );
};

export default Cast;
