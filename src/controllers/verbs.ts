import { Request, Response } from "express";
import Verb from "../models/verbs";

export async function getAllVerbs(req: Request, res: Response) {
  try {
    const allVerbs  = await Verb.find();
    res.status(200).json(allVerbs);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

export async function getVerbByTitle(req: Request, res: Response) {
  const title = req.params.title;

  try {
    const verb  = await Verb.findOne({title});

    if (verb === null) {
      return res.status(404).json({ message: "Verb not found"});
    }

    res.status(200).json(verb);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

export async function getVerbsByType(req: Request, res: Response) {
  const verbTypes = req.params.verbTypes;

  try {
    const verb  = await Verb.find({verbTypes});

    if (verb === null) {
      return res.status(404).json({ message: "Verb not founded asshole"});
    }

    res.status(200).json(verb);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

export async function getVerbByCategory(req: Request, res: Response) {
  const category = req.params.category;

  try {
    const verb  = await Verb.findOne({category});

    if (verb === null) {
      return res.status(404).json({ message: "Verb not found"});
    }

    res.status(200).json(verb);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}
