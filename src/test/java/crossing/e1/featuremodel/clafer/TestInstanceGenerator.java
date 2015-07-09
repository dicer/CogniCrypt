package crossing.e1.featuremodel.clafer;
import org.clafer.scope.Scope;

import crossing.e1.configurator.ReadConfig;
public class TestInstanceGenerator {

	public static void main(String[] args) {
		
			System.out.println(" Testing instance Generator method");
			InstanceGenerator instance=new InstanceGenerator();
			String path=new ReadConfig().getClaferPath();
			ClaferModel model=new ClaferModel(path);

			instance.generateInstances(new ClaferModel(path), 1, 128);
			
			instance.generateInstances(new ClaferModel(path), 2, 128);


			instance.generateInstances(new ClaferModel(path), 3, 128);

			instance.generateInstances(new ClaferModel(path), 4, 128);
			
			//displayScope(instance.getScope());
			
	}
	static void displayScope(Scope scope) {
		System.out.println("**********Scope are**********");
		System.out.println("DefaultScope "+scope.getDefaultScope());
		System.out.println("Charhigh "+scope.getCharHigh());
		System.out.println("CharLow "+scope.getCharLow());
		System.out.println("IntHigh "+scope.getIntHigh());
		System.out.println("IntLow "+scope.getIntLow());
		System.out.println("MulHigh "+scope.getMulHigh());
		System.out.println("MulLow "+scope.getMulLow());
		System.out.println("StringLength "+scope.getStringLength());
		
		}

}
