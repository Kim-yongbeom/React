import React from "react";
import styled from "@emotion/styled/macro";
import { Color, Type } from "../types";
import { mapColorToHex, mapTypeToHex } from "../utils";

const Base = styled.div``;

const ThumbnailImageWrapper = styled.div``;

const ThumbnailImage = styled.img``;

const InfoWrapper = styled.div``;

const Name = styled.div``;

const Index = styled.div``;

const TypeWrapper = styled.div``;

const TypeList = styled.div``;

const TypeInfo = styled.img``;

const ImageWrapper = styled.div``;

const Image = styled.img``;

interface Props {
  id: string;
  name?: string;
  types?: Array<Type>;
  color?: Color;
}

const PokemonInfo: React.FC<Props> = ({ id, name, types, color }) => {
  const formatNumbering = (index: string): string => {
    return `#${index.padStart(3, "0")}`;
  };

  return (
    <Base color={mapColorToHex(color?.name)}>
      {/* 포켓볼 이미지를 가르킴 */}
      <ImageWrapper>
        <Image src="/assets/poketball.svg" />
      </ImageWrapper>
      <InfoWrapper>
        <Name>{name}</Name>
        <Index>{formatNumbering(id)}</Index>
      </InfoWrapper>
      <TypeList>
        {types?.map(({ type }, idx) => (
          <TypeWrapper key={idx} color={mapTypeToHex(type.name)}>
            <TypeInfo src={`/assets/${type.name}.svg`} />
          </TypeWrapper>
        ))}
      </TypeList>
      <ThumbnailImageWrapper>
        <ThumbnailImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      </ThumbnailImageWrapper>
    </Base>
  );
};

export default PokemonInfo;
