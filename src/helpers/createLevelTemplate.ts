import {LevelsEntities} from "../models/levels/LevelsEntities";
import {levelTemplates} from "../models/levels/levelTemplates";
import {createLevel_7_Template} from "./createLevel_7_Template";


export const createLevelTemplate = (urlLevelNumber: number) => {

  let levelEntities = LevelsEntities.LEVEL_1;
  let limitsOfMoves = [1];
  const levelNumber: number = urlLevelNumber;

  levelTemplates.forEach(level => {
    if (level.levelNumber === levelNumber) {
      levelEntities = level.entities
      limitsOfMoves = [...level.limitsOfMoves]
    }
  })

  if (urlLevelNumber === 7) {
    const {limitsOfMoves, levelEntities} = createLevel_7_Template();
    return {limitsOfMoves, levelEntities, levelNumber}
  }

  return {limitsOfMoves, levelEntities, levelNumber};
}