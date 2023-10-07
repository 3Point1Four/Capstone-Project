#include <iostream>
#include <fstream>

int main() {
    std::ofstream svgFile("output.svg");
    
    if (!svgFile.is_open()) {
        std::cerr << "Error opening file!" << std::endl;
        return 1;
    }

    svgFile << "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" << std::endl;
    svgFile << "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"500\" height=\"500\">" << std::endl;
    
    svgFile<< " <rect x=\"0\" y=\"0\" width=\"500\" height=\"500\" fill=\"white\"/>" << std::endl;

    svgFile<< "  <path d=\"M30 80 L50 20 L70 80 L60 80 L50 60 L40 80 Z\" stroke=\"black\" />" << std::endl;
    
    svgFile << "</svg>" << std::endl;

    svgFile.close();

    std::cout << "SVG file created successfully." << std::endl;

    return 0;
}
