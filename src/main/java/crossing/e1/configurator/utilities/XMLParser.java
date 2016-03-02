/**
 * Copyright 2015 Technische Universität Darmstadt
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @author Ram Kamath
 *
 */
package crossing.e1.configurator.utilities;

import org.clafer.ast.AstClafer;
import org.clafer.ast.AstConcreteClafer;
import org.clafer.instance.InstanceClafer;

import crossing.e1.configurator.Constants;
import crossing.e1.featuremodel.clafer.ClaferModelUtils;

/**
 * @author Ram
 *
 */
public class XMLParser implements Labels {
	/**
	 * 
	 * @param inst
	 * @param value
	 * @return
	 */
	public String displayInstanceValues(InstanceClafer inst, String value) {
		InstanceClafer instan = null;

		if (inst.hasChildren()) {
			instan = (InstanceClafer) inst.getChildren()[0].getRef();
			String taskName = instan.getType().getName();
			value = "<Task description=\"" + ClaferModelUtils.trimScope(taskName) + "\">\n";

		} else {
			value = "<Task>\n";
		}
		if (instan != null && instan.hasChildren()) {
			for (InstanceClafer in : instan.getChildren()) {
				if (!in.getType().getRef().getTargetType().isPrimitive()) {
					value += "<" + Constants.ALGORITHM + " type=\"" + ClaferModelUtils
							.trimScope(in.getType().getRef().getTargetType().getName()) + "\"> \n";
					value += displayInstanceXML(in, "");
					value += "</" + Constants.ALGORITHM + "> \n";
				} else {
					value += displayInstanceXML(in, "");
				}
			}

		}
		value += "</Task>";
		return value;
	}

	/**
	 * 
	 * @param inst
	 * @param value
	 * @return
	 */
	public String displayInstanceXML(InstanceClafer inst, String value) {
		try {
			if (inst.getType().hasRef()) {
				if (getSuperClaferName(inst.getType().getRef().getTargetType()))
					System.out.println("YES => " + inst);
			}
			if (inst.hasChildren()) {
				for (InstanceClafer in : inst.getChildren()) {
					value += displayInstanceXML(in, "");
				}

			} else
				if (inst.hasRef() && (inst.getType().isPrimitive() != true) && (inst.getRef().getClass().toString()
						.contains(Constants.INTEGER) == false) && (inst.getRef().getClass().toString().contains(
								Constants.STRING) == false) && (inst.getRef().getClass().toString().contains(Constants.BOOLEAN) == false)) {
					value += displayInstanceXML((InstanceClafer) inst.getRef(), "");
				} else {
					if (inst.hasRef())
						return ("\t<" + ClaferModelUtils.trimScope(inst.getType().getName()) + ">" + inst.getRef().toString().replace("\"",
								"") + "</" + ClaferModelUtils.trimScope(inst.getType().getName()) + ">\n");
					else
						return ("\t<" + ClaferModelUtils
								.trimScope(((AstConcreteClafer) inst.getType()).getParent().getName()) + ">" + ClaferModelUtils
										.trimScope(inst.getType().getName()) + "</" + ClaferModelUtils
												.trimScope(((AstConcreteClafer) inst.getType()).getParent().getName()) + ">\n");

				}
		} catch (Exception E) {
			E.printStackTrace();
		}
		return value;
	}

	/**
	 * 
	 * @param astClafer
	 * @return
	 */
	boolean getSuperClaferName(AstClafer astClafer) {
		if (astClafer.getSuperClafer() != null)
			getSuperClaferName(astClafer.getSuperClafer());
		if (astClafer.getName().contains("_" + Constants.ALGORITHM))
			return true;
		return false;

	}

	/**
	 * 
	 * @param inst
	 * @param value
	 * @return
	 */
	public String getInstanceProperties(InstanceClafer inst, String value) {
		InstanceClafer instan = null;

		if (inst.hasChildren()) {
			instan = (InstanceClafer) inst.getChildren()[0].getRef();

		}
		if (instan != null && instan.hasChildren()) {
			for (InstanceClafer in : instan.getChildren()) {
				if (!in.getType().getRef().getTargetType().isPrimitive()) {
					value += Constants.ALGORITHM + " :" + ClaferModelUtils
							.trimScope(in.getType().getRef().getTargetType().getName()) + Constants.NEWLINE;
					value += getInstancePropertiesDetails(in, "");
					value += Constants.NEWLINE;
				} else {
					value += getInstancePropertiesDetails(in, "");
				}
			}

		}

		return value;
	}

	/**
	 * 
	 * @param inst
	 * @param value
	 * @return
	 */
	public String getInstancePropertiesDetails(InstanceClafer inst, String value) {
		try {
			if (inst.getType().hasRef()) {
				if (getSuperClaferName(inst.getType().getRef().getTargetType())) {

				}
			}
			if (inst.hasChildren()) {
				for (InstanceClafer in : inst.getChildren()) {
					value += getInstancePropertiesDetails(in, "");
				}

			} else
				if (inst.hasRef() && (inst.getType().isPrimitive() != true) && (inst.getRef().getClass().toString()
						.contains(Constants.INTEGER) == false) && (inst.getRef().getClass().toString().contains(
								Constants.STRING) == false) && (inst.getRef().getClass().toString().contains(Constants.BOOLEAN) == false)) {
					value += getInstancePropertiesDetails((InstanceClafer) inst.getRef(), "");
				} else {
					if (inst.hasRef())
						return ("\t" + ClaferModelUtils.trimScope(inst.getType().getName()) + " : " + inst.getRef().toString().replace("\"",
								"") + Constants.NEWLINE);
					else
						return ("\t" + ClaferModelUtils.trimScope(((AstConcreteClafer) inst.getType()).getParent()
								.getName()) + " : " + ClaferModelUtils.trimScope(inst.getType().getName()) + Constants.NEWLINE);

				}
		} catch (Exception E) {
			E.printStackTrace();
		}
		return value;
	}
}