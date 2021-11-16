import styled from 'styled-components';


export const SkeletonContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    width: 30vw;
    align-items: center;
    margin: 0 1rem 0 1rem;

    .skeletonTitleContainer {
      display: flex;
      flex-direction: column;
      gap: .5rem;

      .skeletonTitle {
        border-radius: .4rem;
        height: 1rem;
        width: 70vw;
      }

    }

  .skeletonCardCointainer {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;


    .skeletonTimeCard {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .skeletonTimeCardFragmentBotton, .skeletonTimeCardFragmentTop {
      border-radius: .4rem;
      width: 3.5rem;
      height: 2rem;
    }

    .skeletonTimeCardFragmentTop{
      margin: 0 0 .07rem 0;
      box-shadow: 0px 6px 0px -3px rgba(0, 0, 0, 0.1);
    }

    .skeletonTimeName {
      border-radius: .4rem;
      height: .6rem;
      width: 3rem;
      margin: .5rem 0 0 0;
    }
  }

  @media (min-width:700px) {
    
    .skeletonTitleContainer {
      .skeletonTitle {
        height: 1rem;
        width: 25rem;
      }

    }

    .skeletonCardCointainer {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;

  
    .skeletonTimeCardFragmentBotton, .skeletonTimeCardFragmentTop {
      border-radius: .4rem;
      width: 5rem;
      height: 3rem;
    }

    .skeletonTimeName {
      width: 4rem;
    }
  }
  }
`;